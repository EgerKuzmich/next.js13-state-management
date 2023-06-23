import UserIcon from "@/src/assets/icons/user";
import React from "react";

const UserAvatar = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-xl">
        <UserIcon filled={isAuth} />
      </div>
    </div>
  );
};

export default UserAvatar;
