"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  const handleClick = () => {
    // Replace '/your-specific-link' with the actual link you want to navigate to
    router.push('/brochure.pdf');
  };
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-28 grid h-full w-full grid-cols-1 place-items-center lg:mt-2 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Strive for Success <br /> with Superior Solutions
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Unlock success with us! We simplify technology, offering practical
              IT services and guidance to help your business thrive
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
           For More Details
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                onClick={handleClick}
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/d1.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Download Brochure
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/person.png"
            alt="team work"
            className="col-span-1 m-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            What we Provide ?
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Were your go-to for tech solutions that make business easier. Boost
            your brand with our effective ads and marketing support to help your
            business thrive and grow.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
