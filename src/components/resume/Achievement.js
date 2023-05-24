import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CODEFORCES ROUND 866"
            subTitle="DIV 2"
            result="RANK 978"
            des="Participated on CODEFORCES ROUND 866 and achieved global rank 978"
          />
          <ResumeCard
            title="CODEFORCES ROUND 867"
            subTitle="DIV 3"
            result="RANK 1110"
            des="Participated on CODEFORCES ROUND 867 and achieved global rank 1110"
          />
          <ResumeCard
            title="CODECHEF FEBRUARY COOCKOFF"
            subTitle="DIV 2"
            result="RANK139"
            des="Participated on CODECHEF FEBRUARY COOCKOFF 8th february,2023 and achieved global rank 139"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GOOGLE FAREWELL ROUND "
            subTitle="Fairwell round A 2023"
            result="RANK : 640 "
            des="Participated on google fairwell round 2023 on 15th april ,2023 and scored 100 points."
          />
          <ResumeCard
            title="GOOGLE KICKSTART"
            subTitle="ROUND H 2022 "
            result=""
            des="Participated on google kicksart round H 2022 on november 12th ,2022."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
