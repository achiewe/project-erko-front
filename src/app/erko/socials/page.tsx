import Header from "@/app/components/Header/Header";
import BackButton from "@/app/shared/BackButton";
import SocialsContainer from "@/app/components/SocialsContainer/SocialsContainer";
import Wrapper from "@/app/shared/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <div className="w-full h-full bg-[#EEEEEE] lg:max-w-[960px] lg:max-h-[697px] lg:shadow-lg lg:shadow-gray-800">
        <Header />
        <div className="flex px-[5px] w-full h-full items-start flex-col pb-[10px] lg:px-[20px]">
          <BackButton destination="/erko" />
          <SocialsContainer />
        </div>
      </div>
    </Wrapper>
  );
}
