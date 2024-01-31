import { toTitleCase } from "@/helper/helper";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-2xl font-bold tracking-tight text-gray-800">
        {toTitleCase(router.pathname.split("/")[1])}
      </div>
      <div className="h-11 flex items-center gap-x-2">
        <div className="text-gray-800 text-sm font-semibold font-['Mulish'] leading-tight tracking-tight">
          {toTitleCase(faker.person.fullName())}
        </div>

        <div className="w-11 h-11 rounded-full bg-stone-300 overflow-hidden">
          <img className="overflow-hidden" src={faker.image.avatar()}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
