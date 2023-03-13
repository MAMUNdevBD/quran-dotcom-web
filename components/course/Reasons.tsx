import React from "react";
import ReasonCard from "./ReasonCard";

const Reasons = () => {
  const reasons = [
    {
      icon: "<svg width='62' height='47' viewBox='0 0 62 47' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M60.25 33.8125H57.4375V6.25C57.4301 4.61125 56.7758 3.04173 55.6171 1.88295C54.4583 0.724169 52.8887 0.0698985 51.25 0.0625H10.75C9.11125 0.0698985 7.54173 0.724169 6.38295 1.88295C5.22417 3.04173 4.5699 4.61125 4.5625 6.25V33.8125H1.75C1.30245 33.8125 0.873225 33.9903 0.556757 34.3068C0.240289 34.6232 0.0625 35.0524 0.0625 35.5V40C0.0698985 41.6387 0.72417 43.2083 1.88295 44.3671C3.04173 45.5258 4.61125 46.1801 6.25 46.1875H55.75C57.3887 46.1801 58.9583 45.5258 60.1171 44.3671C61.2758 43.2083 61.9301 41.6387 61.9375 40V35.5C61.9375 35.0524 61.7597 34.6232 61.4432 34.3068C61.1268 33.9903 60.6976 33.8125 60.25 33.8125ZM7.9375 6.25C7.9375 5.50408 8.23382 4.78871 8.76126 4.26126C9.28871 3.73382 10.0041 3.4375 10.75 3.4375H51.25C51.9959 3.4375 52.7113 3.73382 53.2387 4.26126C53.7662 4.78871 54.0625 5.50408 54.0625 6.25V33.8125H7.9375V6.25ZM58.5625 40C58.5625 40.7459 58.2662 41.4613 57.7387 41.9887C57.2113 42.5162 56.4959 42.8125 55.75 42.8125H6.25C5.50408 42.8125 4.78871 42.5162 4.26126 41.9887C3.73382 41.4613 3.4375 40.7459 3.4375 40V37.1875H58.5625V40ZM37.1875 10.75C37.1875 11.1976 37.0097 11.6268 36.6932 11.9432C36.3768 12.2597 35.9476 12.4375 35.5 12.4375H26.5C26.0524 12.4375 25.6232 12.2597 25.3068 11.9432C24.9903 11.6268 24.8125 11.1976 24.8125 10.75C24.8125 10.3024 24.9903 9.87323 25.3068 9.55676C25.6232 9.24029 26.0524 9.0625 26.5 9.0625H35.5C35.9476 9.0625 36.3768 9.24029 36.6932 9.55676C37.0097 9.87323 37.1875 10.3024 37.1875 10.75Z' fill='#E0D2B4'/></svg>",
      title: "HIGH-QUALITY TEACHING",
      txt: "The Arabic Center's teaching is imbued with: professionalism, pedagogy and clarity.",
    },
    {
      icon: '<svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_914_3575)"><path d="M64 12.6211H8C6.93913 12.6211 5.92172 13.0425 5.17157 13.7927C4.42143 14.5428 4 15.5602 4 16.6211V56.6211C4 57.682 4.42143 58.6994 5.17157 59.4495C5.92172 60.1997 6.93913 60.6211 8 60.6211H38L39.14 59.2211L41 56.9411L40.82 56.6211H8V16.6211H64V33.7411C65.5194 34.7247 66.8701 35.9471 68 37.3611V16.6211C68 15.5602 67.5786 14.5428 66.8284 13.7927C66.0783 13.0425 65.0609 12.6211 64 12.6211Z" fill="#E0D2B4"/><path d="M14 24.6211H48V27.8211H14V24.6211Z" fill="#E0D2B4"/><path d="M14 32.6211H36V35.8211H14V32.6211Z" fill="#E0D2B4"/><path d="M14 46.6211H34V49.8211H14V46.6211Z" fill="#E0D2B4"/><path d="M54.9199 35.0815C52.3605 35.0611 49.8546 35.8134 47.7296 37.2398C45.6045 38.6663 43.9592 40.7006 43.0087 43.077C42.0581 45.4533 41.8466 48.0612 42.4016 50.5597C42.9567 53.0582 44.2526 55.3311 46.1199 57.0815L42.2399 61.8215L44.0399 69.0415L51.3599 60.1215C53.677 60.8066 56.1428 60.8066 58.4599 60.1215L65.7799 69.0415L67.5799 61.8215L63.6999 57.0815C65.5672 55.3311 66.8631 53.0582 67.4181 50.5597C67.9732 48.0612 67.7617 45.4533 66.8111 43.077C65.8606 40.7006 64.2153 38.6663 62.0902 37.2398C59.9652 35.8134 57.4592 35.0611 54.8999 35.0815H54.9199ZM54.9199 56.4415C53.2203 56.4178 51.5657 55.8922 50.164 54.9308C48.7623 53.9693 47.6762 52.6149 47.0421 51.0379C46.408 49.4609 46.2544 47.7316 46.6004 46.0674C46.9464 44.4033 47.7767 42.8786 48.9869 41.685C50.1971 40.4915 51.7331 39.6824 53.4019 39.3594C55.0706 39.0364 56.7976 39.2139 58.3657 39.8697C59.9339 40.5255 61.2731 41.6303 62.2151 43.0451C63.157 44.46 63.6597 46.1217 63.6599 47.8215C63.6388 50.1219 62.7073 52.3203 61.0694 53.9358C59.4315 55.5512 57.2204 56.4521 54.9199 56.4415Z" fill="#E0D2B4"/></g><defs><clipPath id="clip0_914_3575"><rect width="72" height="72" fill="white" transform="translate(0 0.621094)"/></clipPath></defs></svg>',
      title: "WE HAVE EXPERIENCE",
      txt: "The Arabic center is the end product of several years of study and experience from previous courses, held with hundreds of students.",
    },
    {
      icon: '<svg width="70" height="61" viewBox="0 0 70 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.6875 31.672C69.6877 28.5671 68.8186 25.526 67.1812 22.9019C65.5438 20.2778 63.2053 18.1784 60.4375 16.8478V14.0939C60.4354 11.0737 59.4741 8.13452 57.6958 5.71118C55.9174 3.28785 53.4166 1.50914 50.5633 0.638303C47.71 -0.232536 44.6559 -0.149239 41.8529 0.875866C39.05 1.90097 36.6471 3.81342 35 6.33018C33.3528 3.81342 30.9499 1.90097 28.147 0.875866C25.3441 -0.149239 22.29 -0.232536 19.4367 0.638303C16.5834 1.50914 14.0825 3.28785 12.3042 5.71118C10.5258 8.13452 9.56452 11.0737 9.56247 14.0939V16.8478C6.79422 18.1781 4.4553 20.2773 2.81751 22.9014C1.17972 25.5256 0.310303 28.5669 0.310303 31.672C0.310303 34.7771 1.17972 37.8184 2.81751 40.4425C4.4553 43.0667 6.79422 45.1659 9.56247 46.4962V46.9064C9.56452 49.9265 10.5258 52.8657 12.3042 55.289C14.0825 57.7124 16.5834 59.4911 19.4367 60.3619C22.29 61.2328 25.3441 61.1495 28.147 60.1244C30.9499 59.0992 33.3528 57.1868 35 54.67C36.6471 57.1868 39.05 59.0992 41.8529 60.1244C44.6559 61.1495 47.71 61.2328 50.5633 60.3619C53.4166 59.4911 55.9174 57.7124 57.6958 55.289C59.4741 52.8657 60.4354 49.9265 60.4375 46.9064V46.4962C63.2032 45.1627 65.5397 43.0627 67.1767 40.4392C68.8137 37.8158 69.6842 34.7761 69.6875 31.672ZM23.4375 56.2814C21.1553 56.28 18.9542 55.4236 17.2574 53.8769C15.5606 52.3302 14.4878 50.2023 14.2453 47.9025C14.9911 48.0215 15.745 48.0803 16.5 48.0782H18.8125C19.4258 48.0782 20.014 47.8313 20.4477 47.3918C20.8813 46.9522 21.125 46.3561 21.125 45.7345C21.125 45.1129 20.8813 44.5167 20.4477 44.0772C20.014 43.6377 19.4258 43.3907 18.8125 43.3907H16.5C13.775 43.386 11.1393 42.4061 9.05776 40.6238C6.97622 38.8415 5.58265 36.3713 5.12291 33.6492C4.66316 30.927 5.16679 28.1277 6.54493 25.7452C7.92308 23.3627 10.0872 21.55 12.6554 20.6271C13.1048 20.4593 13.4926 20.1559 13.7666 19.7577C14.0405 19.3596 14.1874 18.8859 14.1875 18.4005V14.0939C14.1875 11.6075 15.162 9.22288 16.8967 7.46473C18.6314 5.70657 20.9842 4.71885 23.4375 4.71885C25.8907 4.71885 28.2435 5.70657 29.9782 7.46473C31.7129 9.22288 32.6875 11.6075 32.6875 14.0939V36.4474C30.1557 34.1186 26.8564 32.8333 23.4375 32.8439C22.8242 32.8439 22.236 33.0908 21.8023 33.5303C21.3686 33.9699 21.125 34.566 21.125 35.1876C21.125 35.8092 21.3686 36.4053 21.8023 36.8449C22.236 37.2844 22.8242 37.5314 23.4375 37.5314C25.8907 37.5314 28.2435 38.5191 29.9782 40.2772C31.7129 42.0354 32.6875 44.42 32.6875 46.9064C32.6875 49.3928 31.7129 51.7773 29.9782 53.5355C28.2435 55.2936 25.8907 56.2814 23.4375 56.2814ZM53.5 43.3907H51.1875C50.5742 43.3907 49.986 43.6377 49.5523 44.0772C49.1186 44.5167 48.875 45.1129 48.875 45.7345C48.875 46.3561 49.1186 46.9522 49.5523 47.3918C49.986 47.8313 50.5742 48.0782 51.1875 48.0782H53.5C54.2549 48.0803 55.0089 48.0215 55.7547 47.9025C55.5647 49.7042 54.8637 51.4115 53.7364 52.8178C52.6091 54.2241 51.1038 55.2693 49.4027 55.8267C47.7016 56.3841 45.8776 56.43 44.1513 55.9587C42.425 55.4875 40.8705 54.5193 39.6758 53.1714C38.481 51.8234 37.6973 50.1534 37.4194 48.3635C37.1416 46.5736 37.3814 44.7404 38.11 43.0857C38.8386 41.431 40.0247 40.0258 41.5248 39.0401C43.0249 38.0543 44.7747 37.5303 46.5625 37.5314C47.1758 37.5314 47.764 37.2844 48.1977 36.8449C48.6313 36.4053 48.875 35.8092 48.875 35.1876C48.875 34.566 48.6313 33.9699 48.1977 33.5303C47.764 33.0908 47.1758 32.8439 46.5625 32.8439C43.1435 32.8333 39.8442 34.1186 37.3125 36.4474V14.0939C37.3125 11.6075 38.287 9.22288 40.0217 7.46473C41.7564 5.70657 44.1092 4.71885 46.5625 4.71885C49.0157 4.71885 51.3685 5.70657 53.1032 7.46473C54.8379 9.22288 55.8125 11.6075 55.8125 14.0939V18.4005C55.8125 18.8859 55.9594 19.3596 56.2334 19.7577C56.5073 20.1559 56.8951 20.4593 57.3445 20.6271C59.9128 21.55 62.0769 23.3627 63.455 25.7452C64.8332 28.1277 65.3368 30.927 64.877 33.6492C64.4173 36.3713 63.0237 38.8415 60.9422 40.6238C58.8606 42.4061 56.2249 43.386 53.5 43.3907ZM15.3437 30.5001C14.7304 30.5001 14.1422 30.2532 13.7085 29.8136C13.2749 29.3741 13.0312 28.778 13.0312 28.1564C13.0312 27.5348 13.2749 26.9386 13.7085 26.4991C14.1422 26.0595 14.7304 25.8126 15.3437 25.8126C16.8747 25.8049 18.3407 25.1851 19.4233 24.0879C20.5058 22.9907 21.1174 21.5049 21.125 19.9532V17.6095C21.125 16.9879 21.3686 16.3917 21.8023 15.9522C22.236 15.5127 22.8242 15.2657 23.4375 15.2657C24.0508 15.2657 24.639 15.5127 25.0727 15.9522C25.5063 16.3917 25.75 16.9879 25.75 17.6095V19.9532C25.75 22.7504 24.6536 25.4331 22.702 27.411C20.7505 29.3889 18.1036 30.5001 15.3437 30.5001ZM56.9687 28.1564C56.9687 28.778 56.7251 29.3741 56.2914 29.8136C55.8577 30.2532 55.2695 30.5001 54.6562 30.5001C51.8963 30.5001 49.2494 29.3889 47.2979 27.411C45.3463 25.4331 44.25 22.7504 44.25 19.9532V17.6095C44.25 16.9879 44.4936 16.3917 44.9273 15.9522C45.361 15.5127 45.9492 15.2657 46.5625 15.2657C47.1758 15.2657 47.764 15.5127 48.1977 15.9522C48.6313 16.3917 48.875 16.9879 48.875 17.6095V19.9532C48.8826 21.5049 49.4941 22.9907 50.5767 24.0879C51.6592 25.1851 53.1253 25.8049 54.6562 25.8126C55.2695 25.8126 55.8577 26.0595 56.2914 26.4991C56.7251 26.9386 56.9687 27.5348 56.9687 28.1564Z" fill="#E0D2B4"/></svg>',
      title: "NO PREVIOUS KNOWLEDGE REQUIRED",
      txt: "You don't need any prior knowledge.The Arabic center gives you the basics and educates you regardless of your level!",
    },
    {
      icon: '<svg width="42" height="64" viewBox="0 0 42 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.75 29.75H23.25V11.75H25.5C27.8847 11.7574 30.1695 12.708 31.8558 14.3942C33.542 16.0805 34.4926 18.3653 34.5 20.75C34.5 21.3467 34.7371 21.919 35.159 22.341C35.581 22.7629 36.1533 23 36.75 23C37.3467 23 37.919 22.7629 38.341 22.341C38.7629 21.919 39 21.3467 39 20.75C39 17.1696 37.5777 13.7358 35.0459 11.2041C32.5142 8.67232 29.0804 7.25 25.5 7.25H23.25V2.75C23.25 2.15326 23.0129 1.58097 22.591 1.15901C22.169 0.737053 21.5967 0.5 21 0.5C20.4033 0.5 19.831 0.737053 19.409 1.15901C18.9871 1.58097 18.75 2.15326 18.75 2.75V7.25H15.375C11.7946 7.25 8.3608 8.67232 5.82906 11.2041C3.29732 13.7358 1.875 17.1696 1.875 20.75C1.875 24.3304 3.29732 27.7642 5.82906 30.2959C8.3608 32.8277 11.7946 34.25 15.375 34.25H18.75V52.25H14.25C11.8653 52.2426 9.58046 51.292 7.89423 49.6058C6.20801 47.9195 5.25742 45.6347 5.25 43.25C5.25 42.6533 5.01295 42.081 4.59099 41.659C4.16903 41.2371 3.59674 41 3 41C2.40326 41 1.83097 41.2371 1.40901 41.659C0.987053 42.081 0.75 42.6533 0.75 43.25C0.75 46.8304 2.17232 50.2642 4.70406 52.7959C7.2358 55.3277 10.6696 56.75 14.25 56.75H18.75V61.25C18.75 61.8467 18.9871 62.419 19.409 62.841C19.831 63.2629 20.4033 63.5 21 63.5C21.5967 63.5 22.169 63.2629 22.591 62.841C23.0129 62.419 23.25 61.8467 23.25 61.25V56.75H27.75C31.3304 56.75 34.7642 55.3277 37.2959 52.7959C39.8277 50.2642 41.25 46.8304 41.25 43.25C41.25 39.6696 39.8277 36.2358 37.2959 33.7041C34.7642 31.1723 31.3304 29.75 27.75 29.75ZM18.75 29.75H15.375C12.9881 29.75 10.6989 28.8018 9.01104 27.114C7.32321 25.4261 6.375 23.1369 6.375 20.75C6.375 18.3631 7.32321 16.0739 9.01104 14.386C10.6989 12.6982 12.9881 11.75 15.375 11.75H18.75V29.75ZM27.75 52.25H23.25V34.25H27.75C30.1369 34.25 32.4261 35.1982 34.114 36.886C35.8018 38.5739 36.75 40.8631 36.75 43.25C36.75 45.6369 35.8018 47.9261 34.114 49.614C32.4261 51.3018 30.1369 52.25 27.75 52.25Z" fill="#E0D2B4"/></svg>',
      title: "START TODAY FREE OF CHARGE",
      txt: "All courses, materials and services that we offer are free of charge",
    },
    {
      icon: '<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_914_3561)"><path d="M34.8056 33.6385C40.0556 33.6385 44.1389 29.3607 44.1389 24.1107C44.1389 18.8607 39.8612 14.7773 34.6112 14.7773C29.3612 14.7773 25.2778 19.0551 25.2778 24.1107C25.2778 29.3607 29.5556 33.6385 34.8056 33.6385ZM34.6112 18.6662C34.8056 18.6662 34.8056 18.6662 34.6112 18.6662C37.7223 18.6662 40.2501 21.194 40.2501 24.3051C40.2501 27.4162 37.7223 29.7496 34.6112 29.7496C31.5001 29.7496 29.1667 27.2218 29.1667 24.3051C29.1667 21.194 31.6945 18.6662 34.6112 18.6662Z" fill="#E0D2B4"/><path d="M63.5834 32.4724C59.889 29.1669 55.0279 27.4169 49.9723 27.6113H48.4167C48.0279 29.1669 47.4445 30.528 46.6667 31.6946C47.8334 31.5002 48.8056 31.5002 49.9723 31.5002C53.6667 31.3058 57.3612 32.4724 60.2779 34.6113V48.6113H64.1667V33.0558L63.5834 32.4724Z" fill="#E0D2B4"/><path d="M45.5001 15.1669C46.4723 12.8335 49.1945 11.6669 51.7223 12.6391C54.0556 13.6113 55.2223 16.3335 54.2501 18.8613C53.4723 20.6113 51.7223 21.778 49.9723 21.778C49.5834 21.778 49.0001 21.778 48.6112 21.5835C48.8056 22.5558 48.8056 23.528 48.8056 24.3058V25.4724C49.1945 25.4724 49.5834 25.6669 49.9723 25.6669C54.8334 25.6669 58.7223 21.778 58.7223 17.1113C58.7223 12.2502 54.8334 8.36133 50.1667 8.36133C47.0556 8.36133 44.3334 9.91688 42.7778 12.6391C43.7501 13.2224 44.7223 14.0002 45.5001 15.1669Z" fill="#E0D2B4"/><path d="M23.3333 31.889C22.5555 30.7223 21.9721 29.3612 21.5833 27.8057H20.0277C14.9721 27.6112 10.111 29.3612 6.41659 32.4723L5.83325 33.0557V48.6112H9.72214V34.6112C12.8333 32.4723 16.3333 31.3057 20.0277 31.5001C21.1944 31.5001 22.361 31.6946 23.3333 31.889Z" fill="#E0D2B4"/><path d="M20.0278 25.472C20.4167 25.472 20.8055 25.472 21.1944 25.2775V24.1109C21.1944 23.1387 21.1944 22.1664 21.3889 21.3887C21 21.5831 20.4167 21.5831 20.0278 21.5831C17.5 21.5831 15.3611 19.4442 15.3611 16.9164C15.3611 14.3887 17.5 12.2498 20.0278 12.2498C21.9722 12.2498 23.7222 13.4164 24.5 15.1664C25.2778 14.1942 26.4444 13.222 27.4167 12.4442C24.8889 8.36088 19.6389 6.99977 15.5555 9.52755C11.4722 12.0553 10.1111 17.3053 12.6389 21.3887C14.1944 23.9164 16.9167 25.472 20.0278 25.472Z" fill="#E0D2B4"/><path d="M50.7499 44.1385L50.361 43.5552C46.4721 39.2774 41.0277 36.7496 35.1943 36.9441C29.361 36.7496 23.7221 39.2774 19.8332 43.5552L19.4443 44.1385V58.9163C19.4443 60.6663 20.8054 62.2218 22.7499 62.2218H47.6388C49.3888 62.2218 50.9443 60.6663 50.9443 58.9163V44.1385H50.7499ZM46.861 58.3329H23.3332V45.4996C26.4443 42.3885 30.7221 40.8329 35.1943 40.8329C39.4721 40.6385 43.7499 42.3885 46.861 45.4996V58.3329Z" fill="#E0D2B4"/></g><defs><clipPath id="clip0_914_3561"><rect width="70" height="70" fill="white"/></clipPath></defs></svg>',
      title: "PRIVATE TEACHING IN SMALL GROUPS",
      txt: "At regular intervals, we offer teacher-led distance courses via Zoom. Follow our social media for more info.",
    },
    {
      icon: '<svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.9999 0C12.3333 0 0.333252 9.54667 0.333252 21.3333C0.400208 24.1672 1.09226 26.9513 2.35995 29.4867C3.62764 32.022 5.43968 34.2461 7.66658 36C7.66658 37.6 6.54658 41.7867 0.333252 48C6.65325 47.7067 12.7066 45.3333 17.5866 41.3333C20.6266 42.2133 23.8266 42.6667 26.9999 42.6667C41.6666 42.6667 53.6666 33.12 53.6666 21.3333C53.6666 9.54667 41.6666 0 26.9999 0ZM26.9999 37.3333C15.2133 37.3333 5.66658 30.16 5.66658 21.3333C5.66658 12.5067 15.2133 5.33333 26.9999 5.33333C38.7866 5.33333 48.3332 12.5067 48.3332 21.3333C48.3332 30.16 38.7866 37.3333 26.9999 37.3333ZM24.3333 26.6667V32H29.6666V26.6667H24.3333ZM24.3333 21.3333H29.6666V10.6667H24.3333V21.3333Z" fill="#E0D2B4"/></svg>',
      title: "EVERYTHING IN SWEDISH",
      txt: "All material is explained in clear Swedish.",
    },
  ];
  return (
    <div className="container px-10 text-center">
      <h1 className="text-4xl font-elMessiri text-white py-10">
        Why Learn Koran?
      </h1>
      <p className="text-[#D4D4D4]">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
      </p>
      <div className="grid lg:grid-cols-2 gap-5 py-10">
        {reasons.map((reason: any, i: number) => (
          <ReasonCard key={i} reason={reason} />
        ))}
      </div>
    </div>
  );
};

export default Reasons;
