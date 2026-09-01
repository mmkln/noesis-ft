import { signOut, startLogin } from './auth/auth-client.js';


export function createAccountMenu(
  account,
  { sessionChecking = false, onSignedOut = () => {} } = {},
) {
  const menu = document.createElement('div');
  const trigger = document.createElement('button');
  const avatar = document.createElement('span');
  const label = document.createElement('span');
  const chevron = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const chevronPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const popover = document.createElement('div');
  let isOpen = false;

  menu.className = 'account-menu';
  trigger.className = 'account-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-haspopup', 'menu');
  trigger.setAttribute('aria-expanded', 'false');

  avatar.className = 'account-avatar';
  avatar.setAttribute('aria-hidden', 'true');
  label.className = 'account-trigger-label';

  chevron.classList.add('account-chevron');
  chevron.setAttribute('viewBox', '0 0 16 16');
  chevron.setAttribute('fill', 'none');
  chevron.setAttribute('stroke', 'currentColor');
  chevron.setAttribute('stroke-width', '1.7');
  chevron.setAttribute('aria-hidden', 'true');
  chevronPath.setAttribute('d', 'm4 6 4 4 4-4');
  chevron.append(chevronPath);

  popover.className = 'account-popover';
  popover.setAttribute('role', 'menu');
  popover.hidden = true;

  function closeMenu({ restoreFocus = false } = {}) {
    if (!isOpen) return;
    isOpen = false;
    popover.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus();
  }

  if (sessionChecking) {
    label.textContent = 'Checking…';
    trigger.title = 'Checking your sign-in session';
    trigger.disabled = true;
    trigger.setAttribute('aria-busy', 'true');
    avatar.hidden = true;
    chevron.hidden = true;
  } else if (!account) {
    label.textContent = 'Sign in';
    trigger.title = 'Sign in';
    avatar.hidden = true;
    chevron.hidden = true;
    trigger.addEventListener('click', () => startLogin());
  } else {
    const initial = account.email.trim().charAt(0).toUpperCase() || 'M';
    const identity = document.createElement('div');
    const menuAvatar = document.createElement('span');
    const copy = document.createElement('span');
    const email = document.createElement('strong');
    const provider = document.createElement('small');
    const firstDivider = document.createElement('div');
    const switchAccountButton = document.createElement('button');
    const secondDivider = document.createElement('div');
    const signOutButton = document.createElement('button');

    trigger.classList.add('is-authenticated');
    trigger.title = `Account: ${account.email}`;
    avatar.textContent = initial;
    label.hidden = true;

    identity.className = 'account-popover-identity';
    menuAvatar.className = 'account-avatar account-menu-avatar';
    menuAvatar.textContent = initial;
    menuAvatar.setAttribute('aria-hidden', 'true');
    copy.className = 'account-popover-copy';
    email.textContent = account.email;
    provider.textContent = 'Majom ID';
    copy.append(email, provider);
    identity.append(menuAvatar, copy);

    firstDivider.className = 'account-menu-divider';
    firstDivider.setAttribute('role', 'separator');
    switchAccountButton.type = 'button';
    switchAccountButton.setAttribute('role', 'menuitem');
    switchAccountButton.textContent = 'Switch Account…';
    secondDivider.className = 'account-menu-divider';
    secondDivider.setAttribute('role', 'separator');
    signOutButton.type = 'button';
    signOutButton.className = 'account-destructive';
    signOutButton.setAttribute('role', 'menuitem');
    signOutButton.textContent = 'Sign Out';
    popover.append(
      identity,
      firstDivider,
      switchAccountButton,
      secondDivider,
      signOutButton,
    );

    trigger.addEventListener('click', () => {
      isOpen = !isOpen;
      popover.hidden = !isOpen;
      trigger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) switchAccountButton.focus();
    });
    switchAccountButton.addEventListener('click', () => {
      closeMenu();
      startLogin({ switchAccount: true });
    });
    signOutButton.addEventListener('click', async () => {
      closeMenu();
      await signOut();
      onSignedOut();
    });
  }

  const handlePointerDown = (event) => {
    if (isOpen && !menu.contains(event.target)) closeMenu();
  };
  const handleKeyDown = (event) => {
    if (event.key !== 'Escape' || !isOpen) return;
    event.preventDefault();
    closeMenu({ restoreFocus: true });
  };

  document.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('keydown', handleKeyDown);
  trigger.append(avatar, label, chevron);
  menu.append(trigger, popover);

  return {
    menu,
    dispose() {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    },
  };
}
