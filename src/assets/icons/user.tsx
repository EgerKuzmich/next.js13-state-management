import { TPropsWithClassName } from '../../utils/type';

function UserIcon({ className }: TPropsWithClassName) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
    >
      <path d="M24 3C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3zM13 39.5V36c0-2.9 1.1-5.7 3.2-7.8S21 25 24 25c2.9 0 5.7 1.1 7.8 3.2S35 33 35 36v3.5c-3.1 2.2-6.9 3.5-11 3.5s-7.9-1.3-11-3.5zM19 18c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm18 19.8V36c0-3.5-1.4-6.7-3.8-9.2-1.5-1.5-3.2-2.5-5.1-3.1 1.8-1.3 2.9-3.3 2.9-5.7 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 2.3 1.1 4.4 2.9 5.7-1.9.6-3.6 1.7-5.1 3.1-2.4 2.5-3.8 5.7-3.8 9.2v1.8C7.3 34.4 5 29.4 5 24 5 13.5 13.5 5 24 5s19 8.5 19 19c0 5.4-2.3 10.4-6 13.8z"></path>
    </svg>
  );
}

export default UserIcon;
