import Image from "next/image";
import { useState } from "react";

function CharacterInfo({ char, openModal }: any) {
  const [isHovering, setIsHovering] = useState(false);

  const onHoverIn = () => {
    setIsHovering(true);
  };

  const onHoverOut = () => {
    setIsHovering(false);
  };
  return (
    <div onMouseOver={onHoverIn} onMouseOut={onHoverOut}>
      <div
        key={char.id}
        className="my-2 relative border-2 rounded-sm border-[#953ffa] cursor-pointer"
        onClick={() => openModal(char)}
      >
        <Image
          src={char.image}
          alt={"characterImages"}
          width={300}
          height={300}
        />
        <h1 className="font-semibold uppercase pl-1 text-[#953ffa]">
          {" "}
          {char.name}
        </h1>
        <p
          className="absolute top-1 right-2 border-2 border-[#953ffa] rounded-md p-[2px]"
          style={{
            backgroundColor: char.status === "Alive" ? "#45f248" : "#ff0000",
          }}
        >
          {char.status}
        </p>
        {isHovering && (
          <p className="absolute bg-[#953ffa] text-white w-full text-center bottom-0 p-[2.5px] transition-[bottom-0] ease-in-out duration-700">
            Click For More Details
          </p>
        )}
      </div>
    </div>
  );
}

export default CharacterInfo;
