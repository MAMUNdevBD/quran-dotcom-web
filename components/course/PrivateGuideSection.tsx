import Image from "next/image";

const PrivateGuideSection = () => {
  return (
    <div
      className=""
      style={{
        backgroundColor:
          "linear-gradient(180deg, #043B3B 0%, rgba(4, 59, 59, 0.5) 53.47%, #043B3B 100%)",
      }}
    >
      <div className="text-white py-10 bg-[url('/assets/bg-2.png')] bg-cover bg-top bg-no-repeat bg-opacity-50">
        <h1 className=" font-elMessiri text-center text-3xl pb-10 bg-opacity-50">
          Hur det funkar
        </h1>
        <div className="flex flex-col gap-5 items-center md:w-max mx-auto relative px-2 md:px-0">
          <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-5 bg-[#0A5757] rounded-full w-full md:w-[660px] h-[192px] px-12 md:px-0 md:pr-10">
            <div className="absolute -bottom-16 -right-10 md:static scale-50 md:scale-100 flex items-center justify-center bg-[#0A5757] rounded-full w-[168px] h-[168px] outline outline-[10px] outline-[#043B3B]">
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M104.422 95.535C99.9494 95.2197 95.7269 94.9268 91.5067 94.625C81.5222 93.9096 71.5241 93.3171 61.5553 92.4295C53.9972 91.7587 46.5155 92.4876 39.0114 93.0041C28.9503 93.6949 18.8915 94.4394 8.83267 95.1594L3.71436 95.5171C3.74872 95.2397 3.80135 94.9649 3.87191 94.6943C4.75422 92.0852 6.04843 89.7152 7.96611 87.7008C9.59344 85.9926 11.4571 85.0424 13.9397 84.8546C23.8072 84.1034 33.659 83.1532 43.5175 82.2767C45.4599 82.1046 47.4001 81.8721 49.3448 81.7893C51.0734 81.7178 52.6962 82.1068 53.9769 83.502C55.5525 81.8855 57.5557 81.6507 59.7209 81.8475C69.4669 82.7314 79.2136 83.5996 88.9611 84.4522C91.3131 84.6601 93.6675 84.868 96.0173 85.0983C96.3878 85.1262 96.7483 85.2313 97.0752 85.4069C100.958 87.6695 103.02 91.2378 104.422 95.535Z"
                  fill="white"
                />
                <path
                  d="M53.1735 12.2561C59.2506 12.2561 65.3278 12.2718 71.4049 12.2382C72.1589 12.2382 72.5528 12.4618 72.8657 13.1326C74.6303 16.8216 74.8914 20.7342 74.5628 24.7117C74.502 25.4652 74.6258 25.9034 75.3033 26.3438C76.2167 26.9089 76.9708 27.6949 77.4951 28.6282C78.0195 29.5616 78.2969 30.6118 78.3014 31.6807C78.3464 33.1697 78.3554 34.6587 78.3554 36.1522C78.3554 39.6177 76.6155 41.9966 73.5972 43.5304C72.922 43.8724 72.6068 44.2659 72.5483 45.0373C72.447 46.0677 72.2725 47.0898 72.0261 48.0958C71.056 52.4534 68.749 55.8719 64.8461 58.1904C61.2741 60.3144 57.6165 62.1008 53.2928 62.0606C43.6031 61.9667 35.3832 54.6087 34.4311 45.0686C34.3568 44.3352 34.1362 43.8724 33.4227 43.5259C30.1883 41.9496 28.5295 39.3628 28.5813 35.7453C28.6015 34.3681 28.5813 32.9886 28.6533 31.6136C28.6814 30.5256 28.9848 29.4622 29.5355 28.5213C30.0862 27.5804 30.8665 26.7924 31.8044 26.2298C32.3851 25.8609 32.4391 25.5434 32.3153 24.8883C32.0902 23.6922 31.8809 22.429 32.0295 21.244C32.3423 18.7377 32.8983 16.2649 33.3417 13.7742C33.5375 12.672 34.0349 12.2092 35.2999 12.2271C41.2622 12.3098 47.2291 12.2628 53.1892 12.2628L53.1735 12.2561ZM31.2642 34.0819C31.1111 38.7167 32.0767 40.3824 35.8131 41.735C36.6729 42.048 36.9227 42.4326 36.9115 43.318C36.7832 54.5215 47.0175 59.5207 54.2899 59.3843C58.1455 59.3106 61.3484 57.3207 64.4612 55.2705C66.5342 53.9044 68.0422 52.0353 68.7377 49.681C69.3253 47.6495 69.7402 45.5726 69.9779 43.4722C70.095 42.4974 70.2638 42.0167 71.2721 41.6679C74.2252 40.6529 75.9245 38.6384 75.7872 35.3764C75.7309 34.035 75.7422 32.6935 75.6229 31.352C75.4901 29.8518 74.583 28.83 73.2731 28.166C72.9735 28.0306 72.635 28.006 72.3187 28.0967C69.7911 28.8815 67.2139 28.8278 64.6278 28.5975C59.1471 28.1056 53.8532 26.7463 48.6133 25.1589C47.8188 24.9174 47.2629 25.0091 46.5674 25.4942C43.2362 27.8128 39.6282 28.9731 35.5385 27.7904C35.2165 27.7148 34.8806 27.7209 34.5616 27.8083C33.6535 28.0144 32.8391 28.5121 32.2443 29.2241C31.6495 29.9362 31.3074 30.8232 31.271 31.7477C31.2214 32.5146 31.2642 33.2994 31.2642 34.0819Z"
                  fill="white"
                />
                <path
                  d="M87.9594 82.0329C86.3343 81.9032 84.8083 81.7914 83.2957 81.6573C75.3054 80.9463 67.3151 80.1727 59.327 79.5646C57.8145 79.4505 56.2524 79.9826 54.7129 80.2174C54.3617 80.2711 53.9273 80.4857 53.6685 80.356C50.9675 79.0146 48.1653 79.569 45.3788 79.8127C36.7177 80.5699 28.0574 81.3353 19.3978 82.1089C19.2722 82.0909 19.1486 82.0609 19.0287 82.0195C19.0602 79.2605 18.5786 76.43 20.1114 73.8163C20.658 72.8567 21.3954 72.0175 22.2788 71.3499C23.1622 70.6823 24.173 70.2001 25.2499 69.9328C30.3547 68.5913 35.4618 67.2498 40.5553 65.8838C41.1743 65.7161 41.5322 65.7541 41.9486 66.3309C43.0515 67.8267 44.6338 68.7098 46.3782 69.2374C51.0599 70.7067 56.0861 70.6911 60.7585 69.1927C62.5418 68.6777 64.1198 67.6244 65.2736 66.1789C65.3878 66.059 65.5288 65.9675 65.6852 65.912C65.8417 65.8564 66.0091 65.8383 66.1739 65.8592C71.5758 67.2565 76.9777 68.6204 82.3527 70.1452C85.5758 71.0574 87.7816 74.0041 87.9459 77.3578C88.0247 78.8737 87.9594 80.394 87.9594 82.0329Z"
                  fill="white"
                />
                <path
                  d="M45.6219 94.9508C48.0978 94.7943 48.4377 95.0894 48.9981 97.1866C49.1772 97.6662 49.5272 98.0639 49.9817 98.3045C52.6827 99.76 55.4444 99.7398 58.1318 98.2463C58.5977 97.9585 58.9431 97.513 59.1042 96.9921C59.5544 95.3868 60.2296 94.7853 61.8974 94.9105C66.0839 95.2265 70.2704 95.5589 74.4569 95.9077C84.2103 96.7111 93.9638 97.5175 103.717 98.3268C104.392 98.3827 105.068 98.4498 105.743 98.5102C107.168 98.6376 108.082 99.6012 108.016 100.907C107.949 102.248 106.855 103.181 105.403 103.073C102.673 102.87 99.9449 102.637 97.2169 102.414L68.499 100.064C67.0405 99.9433 65.573 99.8405 64.1302 99.6772C63.4775 99.6057 63.0521 99.7242 62.6312 100.314C61.0939 102.468 58.7643 103.279 56.2862 103.76C52.8335 104.431 49.6711 103.675 46.7631 101.759C46.5291 101.637 46.3278 101.461 46.1756 101.247C45.2753 99.5342 43.8325 99.6683 42.194 99.8114C30.7622 100.811 19.3236 101.727 7.88955 102.666C6.13168 102.812 4.37606 102.962 2.61818 103.082C1.21144 103.181 0.142308 102.315 0.0117614 101.025C-0.116534 99.6974 0.815296 98.6465 2.29182 98.5213C9.20477 97.9356 16.1177 97.358 23.0307 96.7886C30.6541 96.1626 38.2776 95.5477 45.6219 94.9508Z"
                  fill="white"
                />
                <path
                  d="M34.46 9.98662C39.5423 3.0445 46.1416 -0.349431 54.5303 0.0284172C61.8387 0.354842 67.4499 3.72194 71.5531 9.98662H34.46Z"
                  fill="white"
                />
                <path
                  d="M50.3014 33.5098C52.4037 32.0498 54.3956 32.3293 56.3561 33.6976C57.2767 31.5468 58.7442 30.2344 61.0558 30.1203C62.3439 30.0558 63.608 30.483 64.5893 31.3143C65.5706 32.1457 66.1948 33.3183 66.3339 34.5919C66.4837 35.8657 66.1399 37.1485 65.3722 38.1796C64.6045 39.2108 63.4705 39.913 62.2005 40.1438C60.9305 40.3746 59.6197 40.1166 58.5342 39.4223C57.4487 38.7279 56.67 37.6492 56.3561 36.4051C55.7574 34.1537 52.9799 33.2281 51.213 34.7283C50.8331 35.0698 50.5624 35.5144 50.4342 36.0072C49.759 38.7259 47.7783 40.3222 45.1336 40.1903C43.9423 40.1307 42.8106 39.6545 41.9386 38.8461C41.0667 38.0376 40.5106 36.9489 40.3687 35.7724C40.2296 34.6169 40.4944 33.449 41.1189 32.4644C41.7434 31.4798 42.6896 30.7382 43.7989 30.364C46.2568 29.5457 48.6696 30.5876 50.0201 33.0224C50.0899 33.1588 50.1686 33.284 50.3014 33.5098ZM64.8709 35.1307C64.8622 34.182 64.4745 33.2755 63.793 32.6107C63.1115 31.9459 62.1921 31.5773 61.2369 31.5859C60.2818 31.5945 59.3693 31.9796 58.7 32.6566C58.0308 33.3335 57.6596 34.2468 57.6683 35.1956C57.6726 35.6654 57.77 36.1297 57.9549 36.5621C58.1399 36.9945 58.4087 37.3864 58.7462 37.7156C59.0836 38.0448 59.483 38.3047 59.9216 38.4805C60.3602 38.6564 60.8293 38.7447 61.3022 38.7404C61.7751 38.7362 62.2426 38.6394 62.6779 38.4557C63.1132 38.272 63.5078 38.0049 63.8391 37.6697C64.1705 37.3346 64.4322 36.9378 64.6092 36.5022C64.7862 36.0665 64.8751 35.6005 64.8709 35.1307ZM45.4082 31.5915C44.6991 31.5986 44.0078 31.8135 43.4211 32.2092C42.8345 32.605 42.3785 33.1641 42.1104 33.8162C41.8423 34.4684 41.774 35.1847 41.9141 35.8753C42.0542 36.5658 42.3965 37.2 42.8979 37.6981C43.3994 38.1962 44.0378 38.5362 44.733 38.6753C45.4282 38.8145 46.1493 38.7467 46.8058 38.4804C47.4624 38.2141 48.0252 37.7611 48.4236 37.1784C48.822 36.5956 49.0384 35.9089 49.0455 35.2045C49.0503 34.7287 48.9595 34.2568 48.7784 33.8162C48.5974 33.3757 48.3296 32.9755 47.9909 32.6391C47.6522 32.3026 47.2493 32.0367 46.8058 31.8568C46.3624 31.6769 45.8872 31.5867 45.4082 31.5915Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="z-10 md:w-[350px] mx-auto text-center md:text-left">
              <h1 className="font-semibold pb-1 text-lg">
                Välj din lärare
              </h1>
              <p className="text-sm text-justify">
                Varje lärare har en registrerad profil och beskrivning på webbplatsen, 
                så att du enkelt kan hitta den som passar dig bäst.
              </p>
            </div>
          </div>
          <div className="absolute -right-20 top-20">
            <svg
              width="67"
              height="222"
              viewBox="0 0 67 222"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-7.62939e-06 222L55.8333 222L55.8333 205.35L33.2208 205.35C43.8292 192.4 52.1111 177.922 58.0667 161.916C64.0222 145.917 67 128.945 67 111C67 80.29 59.8831 55.13 45.6493 35.52C31.4081 15.91 16.1917 4.07001 2.07453e-06 -2.92866e-06L1.31035e-06 17.4825C11.1667 21.7375 22.3333 31.7719 33.5 47.5857C44.6667 63.4069 50.25 84.545 50.25 111C50.25 127.835 47.2722 143.697 41.3167 158.586C35.3611 173.482 27.1722 186.85 16.75 198.69L16.75 166.5L-5.20341e-06 166.5L-7.62939e-06 222Z"
                fill="#0A5757"
              />
            </svg>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-5 bg-[#0A5757] rounded-full w-full md:w-[660px] h-[192px] px-12 md:px-0 md:pl-10">
            <div className="z-10 md:w-[350px] mx-auto -mt-8 md:mt-0 text-center md:text-right">
              <h1 className="font-semibold pb-1 text-lg">Skicka in ansökan</h1>
              <p className="text-sm">
              Efter att du skickat in din ansökan vidarebefordras den direkt till läraren via e-post.
              </p>
            </div>
            <div className="absolute -bottom-16 -left-10 md:static scale-50 md:scale-100 flex items-center justify-center bg-[#0A5757] rounded-full w-[168px] h-[168px] outline outline-[10px] outline-[#043B3B]">
              <svg
                width="101"
                height="101"
                viewBox="0 0 101 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.1961 28.6192H75.6453C76.7287 28.6192 77.6097 27.795 77.6097 26.7814C77.6097 25.7681 76.7287 24.9437 75.6453 24.9437H61.1961C60.1127 24.9437 59.2317 25.7681 59.2317 26.7814C59.2317 27.795 60.1127 28.6192 61.1961 28.6192ZM61.1961 39.646H75.6453C76.7287 39.646 77.6097 38.8212 77.6097 37.8082C77.6097 36.7943 76.7287 35.9705 75.6453 35.9705H61.1961C60.1127 35.9705 59.2317 36.7944 59.2317 37.8082C59.2317 38.8213 60.1127 39.646 61.1961 39.646ZM82.9656 46.9972H61.227C60.1268 46.9972 59.2317 47.8214 59.2317 48.8352C59.2317 49.8485 60.1267 50.6729 61.227 50.6729H82.9656C84.066 50.6729 84.9609 49.8486 84.9609 48.8352C84.9609 47.8214 84.066 46.9972 82.9656 46.9972ZM48.7052 46.5752C46.4409 44.133 43.5466 42.3542 40.3362 41.4299L40.0655 41.3524L40.3136 41.2185C43.7837 39.353 45.9394 35.7803 45.9394 31.8937C45.9394 26.038 41.1937 21.2744 35.3602 21.2744C29.5252 21.2744 24.7781 26.038 24.7781 31.8937C24.7781 35.779 26.9329 39.3514 30.4025 41.2169L30.6508 41.351L30.3803 41.4293C27.1787 42.3502 24.29 44.1219 22.0261 46.554C19.7158 49.0361 18.1581 52.1066 17.5225 55.4321C17.4245 55.9397 17.5297 56.4541 17.8186 56.8823C18.1077 57.3099 18.5482 57.5998 19.0541 57.6979C19.1817 57.7238 19.3105 57.7376 19.438 57.7376C20.3472 57.7376 21.1343 57.0744 21.31 56.16C22.5967 49.4221 28.5035 44.5321 35.355 44.5321C42.2284 44.5321 48.1384 49.4434 49.4077 56.2102C49.5786 57.123 50.3748 57.7855 51.2999 57.7855C51.4275 57.7855 51.5456 57.775 51.6601 57.7528C52.7049 57.5542 53.3944 56.54 53.1971 55.4923C52.5702 52.1509 51.0169 49.0674 48.7052 46.5752ZM35.3602 25.1429C39.0679 25.1429 42.0841 28.1713 42.0841 31.8937C42.0841 35.6155 39.0679 38.6439 35.3602 38.6439C31.6514 38.6439 28.6335 35.6154 28.6335 31.8937C28.6335 28.1712 31.6514 25.1429 35.3602 25.1429Z"
                  fill="white"
                />
                <path
                  d="M92.3121 78.2393H59.2318C58.0534 78.2393 57.3941 77.4167 57.3941 76.4017C57.3941 75.3863 58.0533 74.5637 59.2318 74.5637H92.3121C93.49 74.5637 94.1499 75.3863 94.1499 76.4017C94.1499 77.4167 93.5028 78.2393 92.3121 78.2393ZM53.7186 92.9417H13.2868C9.68195 92.9417 7.77344 91.0446 7.77344 87.4283V12.0787C7.77344 8.46191 11.5198 4.72754 15.1248 4.72754H90.4744C94.0791 4.72754 95.9876 6.62414 95.9876 10.2409V59.8614C95.9876 61.0565 94.7782 63.1075 93.5871 63.1075C92.3962 63.1075 90.4744 61.0565 90.4744 59.8614V12.0787C90.4744 10.8488 89.8623 10.2409 88.6365 10.2409H15.1249C13.8991 10.2409 13.2869 10.8488 13.2869 12.0787V85.5905C13.2869 86.8203 13.8991 87.4282 15.1249 87.4282H55.5562C56.7467 87.4282 57.7893 89.5828 57.7893 90.7773C57.7893 91.9735 56.8228 92.9416 55.6323 92.9416L53.7186 92.9417ZM78.1513 92.9417C77.5972 92.9417 77.042 92.744 76.6192 92.3491C75.7722 91.5588 75.7722 90.2794 76.6192 89.4897L90.5695 76.9557L76.6192 63.5107C75.7722 62.7214 75.7722 61.4404 76.6192 60.6507C77.4659 59.8614 78.8373 59.8614 79.6847 60.6507L95.1411 75.0702C95.9878 75.8592 95.9878 77.1405 95.1411 77.9298L79.6846 92.3491C79.2609 92.744 78.7063 92.9417 78.1513 92.9417Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -left-20 top-[19rem]">
            <svg
              width="67"
              height="222"
              viewBox="0 0 67 222"
              fill="none"
              className=" transform -scale-x-100"
            >
              <path
                d="M-7.62939e-06 222L55.8333 222L55.8333 205.35L33.2208 205.35C43.8292 192.4 52.1111 177.922 58.0667 161.916C64.0222 145.917 67 128.945 67 111C67 80.29 59.8831 55.13 45.6493 35.52C31.4081 15.91 16.1917 4.07001 2.07453e-06 -2.92866e-06L1.31035e-06 17.4825C11.1667 21.7375 22.3333 31.7719 33.5 47.5857C44.6667 63.4069 50.25 84.545 50.25 111C50.25 127.835 47.2722 143.697 41.3167 158.586C35.3611 173.482 27.1722 186.85 16.75 198.69L16.75 166.5L-5.20341e-06 166.5L-7.62939e-06 222Z"
                fill="#0A5757"
              />
            </svg>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-5 bg-[#0A5757] rounded-full w-full md:w-[660px] h-[192px] px-12 md:px-0 md:pr-10">
            <div className="absolute -bottom-16 -right-10 md:static scale-50 md:scale-100 flex items-center justify-center bg-[#0A5757] rounded-full w-[168px] h-[168px] outline outline-[10px] outline-[#043B3B]">
              <svg
                width="84"
                height="88"
                viewBox="0 0 84 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.6981 22.6306H64.4109C65.4405 22.6306 66.2745 21.8505 66.2745 20.89C66.2745 19.9296 65.4386 19.1532 64.4109 19.1532H50.6981C49.6684 19.1532 48.8344 19.9342 48.8344 20.8938C48.8344 21.8533 49.6703 22.6344 50.6981 22.6344V22.6306ZM50.6981 33.0761H64.4109C65.4405 33.0761 66.2745 32.2951 66.2745 31.3355C66.2745 30.376 65.4386 29.5949 64.4109 29.5949H50.6981C49.6684 29.5949 48.8344 30.3751 48.8344 31.3355C48.8344 32.296 49.6703 33.0743 50.6981 33.0743V33.0761ZM71.3571 40.0395H50.7327C49.6881 40.0395 48.8391 40.8206 48.8391 41.781C48.8391 42.7415 49.6881 43.5216 50.7327 43.5216H71.3571C72.4017 43.5216 73.2507 42.7405 73.2507 41.781C73.2507 40.8215 72.4017 40.0395 71.3571 40.0395ZM38.8452 39.6396C36.6916 37.3238 33.9455 35.6388 30.903 34.7663L30.6465 34.6925L30.8815 34.5654C34.1753 32.7986 36.2168 29.4146 36.2168 25.7325C36.2168 20.1856 31.7136 15.6738 26.177 15.6738C20.6404 15.6738 16.1372 20.1856 16.1372 25.7325C16.1372 29.4137 18.1824 32.7968 21.4725 34.5645L21.7084 34.6915L21.451 34.7653C18.4157 35.637 15.6752 37.3164 13.5229 39.6237C11.3335 41.9691 9.85202 44.8838 9.24897 48.0324C9.20263 48.2688 9.20349 48.512 9.25152 48.7481C9.29954 48.9842 9.39378 49.2085 9.52883 49.4081C9.66388 49.6078 9.83708 49.7788 10.0385 49.9115C10.2399 50.0442 10.4656 50.1359 10.7026 50.1813C10.8224 50.2062 10.9444 50.2188 11.0667 50.2187C11.491 50.2147 11.9007 50.0633 12.2253 49.7905C12.5498 49.5177 12.769 49.1405 12.8452 48.7238C13.4351 45.622 15.0924 42.8234 17.5305 40.812C19.9686 38.8006 23.0342 37.7028 26.1973 37.7084C29.3603 37.7141 32.422 38.8228 34.8529 40.8429C37.2837 42.863 38.931 45.6675 39.5098 48.7715C39.6001 49.2475 39.8762 49.6682 40.2773 49.941C40.6784 50.2138 41.1717 50.3164 41.6486 50.2262C42.1255 50.136 42.5469 49.8604 42.8202 49.46C43.0935 49.0596 43.1963 48.5673 43.106 48.0913C42.5149 44.9286 41.0375 41.998 38.8452 39.6396ZM26.1798 19.34C27.4478 19.3356 28.6885 19.7068 29.745 20.4068C30.8014 21.1067 31.626 22.1038 32.1143 23.2718C32.6026 24.4398 32.7327 25.7262 32.4881 26.9681C32.2434 28.2099 31.6351 29.3514 30.7401 30.2479C29.845 31.1444 28.7036 31.7556 27.4603 32.0042C26.2171 32.2527 24.9278 32.1274 23.756 31.6441C22.5841 31.1608 21.5822 30.3413 20.8773 29.2892C20.1724 28.2372 19.7961 27 19.7961 25.7344C19.7946 24.0419 20.466 22.418 21.6628 21.2192C22.8597 20.0203 24.4842 19.3445 26.1798 19.34Z"
                  fill="white"
                />
                <path
                  d="M43.602 83.5611H5.23239C1.81121 83.5611 0 81.7645 0 78.3384V6.96335C0 3.53727 3.5569 0 6.9762 0H78.483C81.9041 0 83.7154 1.79666 83.7154 5.22275V52.2275C83.7154 53.3598 82.5678 55.3022 81.4371 55.3022C80.3064 55.3022 78.483 53.358 78.483 52.2275V6.96335C78.483 5.79828 77.9026 5.22275 76.7392 5.22275H6.9762C5.81366 5.22275 5.23239 5.79828 5.23239 6.96335V76.5978C5.23239 77.7629 5.81366 78.3384 6.9762 78.3384H45.3458C46.4756 78.3384 47.4649 80.3798 47.4649 81.5103C47.466 81.7796 47.4139 82.0463 47.3116 82.2954C47.2093 82.5445 47.0587 82.771 46.8686 82.9619C46.6784 83.1529 46.4524 83.3045 46.2035 83.4081C45.9545 83.5117 45.6876 83.5653 45.4179 83.5658L43.602 83.5611Z"
                  fill="white"
                />
                <path
                  d="M62.9497 78.2463C62.7099 78.2466 62.4723 78.1995 62.2508 78.1078C62.0293 78.0161 61.8281 77.8816 61.6589 77.7119L57.3214 73.3833C56.979 73.0412 56.7868 72.5774 56.7871 72.0939C56.7874 71.6104 56.9801 71.1468 57.3228 70.8051C57.6655 70.4634 58.1301 70.2716 58.6145 70.2718C59.0989 70.2721 59.5634 70.4644 59.9057 70.8065L62.9721 73.8673L72.6675 64.486C73.0168 64.1591 73.4808 63.9823 73.9595 63.9937C74.4382 64.0051 74.8933 64.2038 75.2265 64.547C75.5598 64.8902 75.7446 65.3504 75.7411 65.8283C75.7376 66.3063 75.5461 66.7637 75.2079 67.102L64.2199 77.7334C63.8797 78.0631 63.4239 78.2472 62.9497 78.2463Z"
                  fill="white"
                />
                <path
                  d="M66.2711 88.0003C56.9408 88.0003 49.3496 80.4231 49.3496 71.11C49.3496 61.7969 56.9445 54.2197 66.2711 54.2197C75.5977 54.2197 83.1926 61.7969 83.1926 71.11C83.1926 80.4231 75.6061 88.0003 66.2711 88.0003ZM66.2711 57.8635C58.9542 57.8635 53.0001 63.8057 53.0001 71.11C53.0001 78.4144 58.9579 84.3566 66.2711 84.3566C73.5843 84.3566 79.5421 78.4144 79.5421 71.11C79.5421 63.8057 73.5927 57.8635 66.2711 57.8635Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="z-10 md:w-[350px] mx-auto -mt-8 md:mt-0 text-center md:text-left">
              <h1 className="font-semibold pb-1 text-lg">Godkänande</h1>
              <p className="text-sm text-justify">
                Målet är att behandla ansökan inom 72 timmar. Läraren läser igenom varje ansökan och ger feedback via e-post. 
                Det finns dock ingen garanti att du kommer att erbjudas en plats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateGuideSection;
