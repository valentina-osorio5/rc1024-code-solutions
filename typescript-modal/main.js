'use strict';
const $openModal = document?.querySelector('.open-modal');
const $dismissModal = document?.querySelector('.dismiss-modal');
const $dialog = document?.querySelector('dialog');
function modalOpen(event) {
  $dialog?.showModal();
}
$openModal?.addEventListener('click', modalOpen);
function modalClose(event) {
  $dialog?.close();
}
$dismissModal?.addEventListener('click', modalClose);
