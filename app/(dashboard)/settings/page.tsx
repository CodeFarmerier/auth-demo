import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const aa = await auth();
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button>singout</button>
      </form>
      {JSON.stringify(aa)}
    </div>
  );
};

export default SettingsPage;
