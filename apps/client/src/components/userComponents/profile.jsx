import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@app/client/components/ui/hover-card";

const ProfileCard = ({ user }) => {
  return (
    <>
      {!user.error ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <button variant="link"><img src="/user (2).png" alt="user" className="h-5" /></button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64 m-0">
            <div className=" flex flex-col items-center justify-center bg-white text-black   ">
              <img
                className="rounded-lg w-10 my-5"
                src="./admin_profile.png"
                alt="profile image"
                srcset=""
              />
              <p className="mb-1 font-semibold text-base">
                {user.firstName + " " + user.lastName}
              </p>
              <p>{user.email}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileCard;
