import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";

const Instructions: React.FC = () => {
  const [item1, setItem1] = useState(true);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);

  const handleItem1 = () => {
    setItem1(!item1);
    setItem2(false);
    setItem3(false);
  };

  const handleItem2 = () => {
    setItem2(!item2);
    setItem1(false);
    setItem3(false);
  };

  const handleItem3 = () => {
    setItem3(!item3);
    setItem2(false);
    setItem1(false);
  };
  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className=" w-full">
          <Header />
          <div className="ml-[60px] flex flex-col gap-6">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-4 items-center h-[30px]">
                <div>
                  <p className="  font-semibold text-[16px] text-[#7E7D88] ">
                    Hỗ trợ
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-angle-right text-[#FFAC69]"></i>
                </div>

                <div>
                  <p className="text-[#FF7506] text-[16px] font-semibold ">
                    Hướng dẫn sử dụng
                  </p>
                </div>
              </div>
              <span className="text-[#FFFFFF] text-4xl font-bold">
                Hướng dẫn sử dụng
              </span>
            </div>

            {/* Cotent Record  */}
            <div className=" max-w-[1541px] min-h-[504px] h-full w-full flex  gap-6">
              <div className="bg-[#2F2F41] max-w-[400px] w-full flex flex-col rounded-2xl">
                <div className="bg-[#39394D] rounded-t-2xl px-6 py-6 text-2xl font-bold text-[#FFFFFF]">
                  Danh mục hướng dẫn
                </div>
                <div className="px-6 py-6 flex flex-col gap-5 text-[#FFFFFF] font-bold text-lg">
                  {item1 ? (
                    <span className="text-[#FF7506] cursor-pointer">
                      1. Lorem ipsum dolor sit amet
                    </span>
                  ) : (
                    <span className="cursor-pointer" onClick={handleItem1}>
                      1. Lorem ipsum dolor sit amet
                    </span>
                  )}

                  {item2 ? (
                    <span className="text-[#FF7506] cursor-pointer">
                      2. Consectetur adipiscing elit sed do
                    </span>
                  ) : (
                    <span className="cursor-pointer" onClick={handleItem2}>
                      2. Consectetur adipiscing elit sed do
                    </span>
                  )}

                  {item3 ? (
                    <span className="text-[#FF7506] cursor-pointer">
                      3. Iusmod tempor incididunt ut labo
                    </span>
                  ) : (
                    <span className="cursor-pointer" onClick={handleItem3}>
                      3. Iusmod tempor incididunt ut labo
                    </span>
                  )}
                </div>
              </div>
              <div className="bg-[#2F2F41] rounded-2xl w-full">
                <div className="px-6 py-6 ">
                  {item1 && (
                    <div className="flex flex-col gap-10">
                      <span className="text-[#FF7506] text-center font-bold text-2xl">
                        Lorem ipsum dolor sit amet
                      </span>
                      <span className="text-[#FFFFFF] font-bold text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas:
                      </span>
                    </div>
                  )}
                  {item2 && (
                    <div className="flex flex-col gap-10">
                      <span className="text-[#FF7506] text-center font-bold text-2xl">
                        Consectetur adipiscing elit sed do
                      </span>
                      <span className="text-[#FFFFFF] font-bold text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas:
                      </span>
                    </div>
                  )}
                  {item3 && (
                    <div className="flex flex-col gap-10">
                      <span className="text-[#FF7506] text-center font-bold text-2xl">
                        Iusmod tempor incididunt ut labo
                      </span>
                      <span className="text-[#FFFFFF] font-bold text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Platea sit placerat odio lorem. Cum eleifend bibendum
                        ipsum quis scelerisque dui nibh odio id. Nam cras nec
                        non posuere etiam diam sed lacus lacus. In eget morbi
                        eros, vitae enim nunc, cursus. Nisl eleifend lectus nunc
                        massa aliquam, tellus in imperdiet. Malesuada
                        suspendisse gravida tortor neque quis accumsan et
                        posuere. Ac turpis urna ipsum pretium nisi aenean.
                        Facilisis scelerisque placerat eget lorem eget maecenas:
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
