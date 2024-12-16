import { useState } from 'react';

type AccordionProps = {
  topics: { id: number; title: string; content: string }[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState<undefined | number>();

  function handleTopicClick(id: number) {
    if (id === openTopicId) {
      setOpenTopicId(undefined);
    } else {
      setOpenTopicId(id);
    }
  }

  return (
    <div className="topic">
      {topics.length > 0 &&
        topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isOpen={openTopicId === topic.id}
            onHandleTopicClick={handleTopicClick}
          />
        ))}
    </div>
  );
}

type TopicCardProps = {
  topic: { id: number; title: string; content: string };
  isOpen: boolean;
  onHandleTopicClick: (id: number) => void;
};

function TopicCard({ topic, isOpen, onHandleTopicClick }: TopicCardProps) {
  console.log(topic);
  console.log(onHandleTopicClick);
  return (
    <>
      <h3
        className="topic-title"
        onClick={() => onHandleTopicClick(topic.id)}
        obs>
        {topic.title}
      </h3>
      {isOpen && <p className="topic-content">{topic.content}</p>}
    </>
  );
}
