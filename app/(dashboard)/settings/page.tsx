import { auth, signOut } from "@/auth";
import Avatar from "@/lib/avatar";
const SettingsPage = async () => {
  const aa = await auth();
  const address = "0x4c8b5D17BaC56aEBbdB55F92Ced29Fc85F2F04EF";
  const address2 = "0xd44Fe4186910Fcd363bd4784cC2399f1A2454004";
  const address3 = "0xd44Fe4186910Fcd363bd4784cC2399f1A2454004";
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button>singout</button>
        <Avatar address={address} />
        <Avatar address={address2} />
        <Avatar address={address3} />
      </form>
      {JSON.stringify(aa)}
    </div>
  );
};

export default SettingsPage;
