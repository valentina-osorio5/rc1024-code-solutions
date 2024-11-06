const $openModal = document?.querySelector('.open-modal');

const $dismissModal = document?.querySelector('.dismiss-modal');

const $dialog = document?.querySelector('dialog');

function modalOpen(): any {
  $dialog?.showModal();
}
$openModal?.addEventListener('click', modalOpen);

function modalClose(): any {
  $dialog?.close();
}
$dismissModal?.addEventListener('click', modalClose);
