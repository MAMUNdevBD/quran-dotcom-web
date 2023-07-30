import { right } from "@popperjs/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex justify-between container items-center bg-bgarabic py-[190px] relative]"
      style={{
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Make the background image cover the container width
      }}
    >
      <div className="text-white text-center md:text-start pt-[10px] pl-[20px] ">
        <h1 className="font-elMessiri font-bold text-5xl">
          Välkommen till <br /> StuderaKoranen!
        </h1>
        <p className="text-xl">-Studera Koranen online</p>
        <p className="md:w-[505px] font-inter font-[400] py-6  text-justify md:text-start">
          StuderaKoranen är en unik satsning vars syfte är att främja
          koranundervisning i Sverige. Vi erbjuder privatundervisning,
          kursmaterial, rådgivning, Koran-online och mycket mer!
        </p>
        <div className="text-black flex justify-center md:justify-start gap-8 mt-5">
          <Link
            href={"/surah/1"}
            className="font-sans flex items-center justify-center py-2 shadow-lg shadow-gray-900 gap-3 bg-white rounded-full w-32"
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.6V0.9C15 0.3375 14.6786 0 14.1429 0H3.21429C1.39286 0 0 1.4625 0 3.375V14.625C0 16.5375 1.39286 18 3.21429 18H14.1429C14.5714 18 15 17.6625 15 17.1V16.5375C15 16.3125 14.8929 16.0875 14.6786 15.8625C14.5714 15.3 14.5714 13.725 14.6786 13.275C14.8929 13.1625 15 12.9375 15 12.6ZM10.0808 5.12648C10.1009 5.08395 10.1397 5.0625 10.1786 5.0625C10.2174 5.0625 10.2563 5.08395 10.2763 5.12648L10.6507 5.92277L11.4877 6.05039C11.5771 6.0641 11.6129 6.17941 11.5483 6.24586L10.9426 6.86566L11.0856 7.7407C11.0977 7.81488 11.0417 7.875 10.9781 7.875C10.9614 7.875 10.944 7.87078 10.9272 7.86164L10.1786 7.44855L9.42991 7.86164C9.41317 7.87078 9.39576 7.875 9.37902 7.875C9.3154 7.875 9.25949 7.81488 9.27154 7.7407L9.41451 6.86566L8.80882 6.24586C8.74386 6.17941 8.77969 6.0641 8.86942 6.05039L9.70614 5.92277L10.0808 5.12648ZM8.14252 2.70035C8.60022 2.70035 9.05525 2.78789 9.49453 2.96086C9.52774 2.96088 9.56053 2.96856 9.5906 2.98335C9.62067 2.99814 9.64728 3.01968 9.66855 3.04646C9.68982 3.07323 9.70524 3.10457 9.71371 3.13829C9.72218 3.172 9.7235 3.20725 9.71757 3.24156C9.71164 3.27586 9.69862 3.30838 9.67941 3.33682C9.6602 3.36526 9.63528 3.38893 9.60641 3.40615C9.57754 3.42337 9.54542 3.43372 9.51232 3.43648C9.47921 3.43924 9.44594 3.43433 9.41484 3.42211C9.39241 3.42211 9.31138 3.41473 9.27656 3.41473C7.52511 3.41473 6.10045 4.91062 6.10045 6.74965C6.10045 8.58832 7.52511 10.0846 9.27656 10.0846C9.31105 10.0846 9.39308 10.0772 9.41484 10.0772C9.54643 10.0772 9.64252 10.1876 9.64252 10.3155C9.64252 10.4203 9.57757 10.5093 9.48783 10.5413C9.05022 10.7125 8.59754 10.7993 8.14219 10.7993C6.01574 10.7996 4.28571 8.98277 4.28571 6.75C4.28571 4.51687 6.01574 2.70035 8.14252 2.70035ZM12.75 15.75H3.21429C2.57143 15.75 2.14286 15.3 2.14286 14.625C2.14286 13.95 2.67857 13.5 3.21429 13.5H12.75V15.75Z"
                fill="black"
              />
            </svg>
            Koranen
          </Link>
          <Link
            href={"/course"}
            className="font-sans flex items-center justify-center py-2 shadow-lg shadow-gray-900 gap-3 bg-white rounded-full w-32"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.30106 9.5H9.45159V7.91667H6.30106V9.5ZM6.30106 7.125H12.6021V5.54167H6.30106V7.125ZM6.30106 4.75H12.6021V3.16667H6.30106V4.75ZM4.7258 12.6667C4.2926 12.6667 3.92189 12.5118 3.61366 12.202C3.30491 11.8916 3.15053 11.5187 3.15053 11.0833V1.58333C3.15053 1.14792 3.30491 0.775042 3.61366 0.464708C3.92189 0.154903 4.2926 0 4.7258 0H14.1774C14.6106 0 14.9816 0.154903 15.2903 0.464708C15.5985 0.775042 15.7527 1.14792 15.7527 1.58333V11.0833C15.7527 11.5187 15.5985 11.8916 15.2903 12.202C14.9816 12.5118 14.6106 12.6667 14.1774 12.6667H4.7258ZM1.57527 15.8333C1.14207 15.8333 0.771355 15.6784 0.463128 15.3686C0.154376 15.0583 0 14.6854 0 14.25V3.16667H1.57527V14.25H12.6021V15.8333H1.57527Z"
                fill="black"
                fillOpacity="0.9"
              />
            </svg>
            Kurser
          </Link>
        </div>
      </div>
      <div className="absolute md:static opacity-10 md:opacity-100 md:px-26 pb-5 w-full flex justify-end pr-[60px]">
        <div className="w-[25rem] aspect-square">
          <svg
            id="Logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 599.77 676.31"
            fill="#fff"
            className="w-full h-full"
          >
            <g id="Text_i_cirkel" data-name="Text i cirkel">
              <text
                transform="translate(158.46 315.57)"
                font-size="86"
                stroke="#231f20"
                stroke-miterlimit="10"
                stroke-width="0.75"
                font-family="TrajanPro-Bold, TrajanPro Bold"
                font-weight="700"
              >
                Studera
              </text>
              <text
                transform="translate(145.64 394)"
                font-size="66"
                stroke="#231f20"
                stroke-miterlimit="10"
                stroke-width="0.75"
                font-family="TrajanPro-Bold, TrajanPro Bold"
                font-weight="700"
              >
                KORANEN
              </text>
            </g>
            <g id="Envelope_est_1444" data-name="Envelope est 1444">
              <path
                d="M412.56,772c-4.55-1.71-6.82-2.62-11.31-4.56l-3.8,8.79c5.2,2.25,7.82,3.3,13.1,5.24l-1,2.71c-6.93-2.56-10.37-4-17.15-7l10.93-24.22c5.86,2.64,8.82,3.86,14.8,6.08-.41,1.08-.61,1.62-1,2.7-4.6-1.71-6.89-2.63-11.42-4.59-1.33,3.09-2,4.63-3.33,7.71,4.44,1.92,6.67,2.82,11.18,4.51Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M420.05,783.38a16.14,16.14,0,0,0,6.62,3.88c4.1,1.21,7,0,7.68-2.55.64-2.41-.65-4.26-4.28-6.69-4.36-2.92-6.68-6-5.51-9.59,1.29-3.94,5.84-5.64,11.32-4.08a15.44,15.44,0,0,1,5.92,2.94c-.68,1-1,1.47-1.72,2.45A13.72,13.72,0,0,0,435,767c-3.89-1.11-6,.48-6.53,2.21-.74,2.37.65,4.12,4.35,6.64,4.53,3.09,6.63,5.81,5.69,9.59-1,4-5.49,6.61-12.89,4.42a18.77,18.77,0,0,1-7.45-4.12Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M457.29,772.77c-3.54-.64-5.3-1-8.82-1.78l.63-2.85a195.93,195.93,0,0,0,21.27,3.71l-.36,2.89c-3.58-.45-5.36-.72-8.92-1.31-1.55,9.34-2.33,14-3.88,23.34-1.67-.27-2.5-.42-4.17-.72Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M471.54,796.68a2.59,2.59,0,0,1,3.09-2.17,2.55,2.55,0,0,1,2.56,2.73c-.13,1.42-1.32,2.38-3.1,2.21A2.57,2.57,0,0,1,471.54,796.68Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M508.88,777.74h-.08c-1.95,1-2.93,1.54-4.92,2.53-.32-1-.48-1.57-.79-2.63,2.47-1.23,3.7-1.86,6.11-3.15,1.3,0,1.94-.08,3.24-.15l1.35,25.59c-1.63.09-2.44.12-4.07.19C509.38,791.16,509.22,786.69,508.88,777.74Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M542.83,796.76c-.45-2.75-.68-4.13-1.14-6.88-5.58.93-8.39,1.31-14,1.93l-.25-2.28a202.54,202.54,0,0,0,10.69-18c1.63-.27,2.44-.41,4.07-.71L545,786.54c1.66-.31,2.49-.46,4.15-.79l.53,2.66c-1.68.34-2.51.5-4.19.8.49,2.75.74,4.12,1.24,6.87C545.2,796.37,544.41,796.5,542.83,796.76Zm-1.58-9.56c-.57-3.38-.85-5.07-1.41-8.45-.22-1.32-.39-2.65-.52-4l-.14,0c-.62,1.62-1.15,2.82-1.76,4.12-2.27,3.88-3.46,5.81-5.95,9.63v.08C535.39,788.13,537.35,787.84,541.25,787.2Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M571.65,790.29c-.77-2.69-1.15-4-1.91-6.71-5.48,1.56-8.24,2.26-13.78,3.51l-.5-2.23a207.39,207.39,0,0,0,8.66-19.08c1.6-.45,2.4-.68,4-1.16l4.6,15.25c1.63-.49,2.44-.74,4.06-1.26.33,1,.5,1.55.83,2.59-1.64.52-2.46.78-4.11,1.27l2,6.69C574,789.62,573.2,789.85,571.65,790.29ZM569,781c-.94-3.29-1.41-4.94-2.34-8.23-.37-1.29-.69-2.59-1-3.9l-.13,0c-.44,1.69-.83,2.94-1.3,4.3-1.84,4.12-2.81,6.17-4.86,10.25l0,.08C563.25,782.55,565.17,782.05,569,781Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M599.76,780.51c-1.06-2.58-1.59-3.87-2.66-6.45-5.32,2.2-8,3.22-13.4,5.1L583,777a207.68,207.68,0,0,0,6.55-20c1.55-.64,2.32-1,3.86-1.63L599.67,770c1.58-.68,2.36-1,3.93-1.74l1.12,2.48c-1.59.72-2.38,1.07-4,1.76,1.1,2.56,1.65,3.84,2.76,6.4C602,779.58,601.27,779.89,599.76,780.51Zm-3.7-9c-1.3-3.17-2-4.75-3.26-7.91-.51-1.24-1-2.5-1.41-3.77l-.13,0c-.25,1.73-.51,3-.82,4.43-1.39,4.31-2.13,6.46-3.73,10.76l0,.07C590.49,773.81,592.35,773.08,596.06,771.55Z"
                transform="translate(-200.12 -123.81)"
              />
            </g>
            <g id="Bok">
              <path
                d="M344.42,650.68,368.6,624l.18.22L351,647l.21.38a35.18,35.18,0,0,0,4.93-.49c.59-.14,1-1.24,1.56-1.86q4.08-4.81,8.16-9.6a8.78,8.78,0,0,1,.77-.73l.18.23-8.26,10.26.23.43,1.18-.19c3.69-.58,7.39-1.05,11.06-1.79,3-.6,5.93-1.5,8.89-2.32q3.43-1,6.84-2.05c2.27-.73,4.52-1.56,6.79-2.29,3.85-1.23,7.7-2.46,11.56-3.61,2.79-.84,5.59-1.63,8.4-2.3s5.53-1.19,8.31-1.65c3.82-.63,7.64-1.37,11.47-1.64,6.17-.44,12.35-.66,18.52-.72a95.87,95.87,0,0,1,10.56.71c3.12.33,6.24.76,9.33,1.38,4,.8,8,1.56,11.65,3.92a14.21,14.21,0,0,1,2.41,2.08,2,2,0,0,1,.48,1.45,2.1,2.1,0,0,1-1.1,1.15,9.32,9.32,0,0,1-2.15.32c.29.41.43.77.66.91A36.18,36.18,0,0,0,494,643.64a15.54,15.54,0,0,0,19-8.25,3.15,3.15,0,0,0,.16-1.84,8.5,8.5,0,0,0-.88-2.45,3.71,3.71,0,0,1,.38-4.41,35.27,35.27,0,0,1,4.63-5.62A146.75,146.75,0,0,1,529,611.76a153.4,153.4,0,0,1,13.26-8.45,116.11,116.11,0,0,1,12.58-6.06,113.91,113.91,0,0,1,12.23-4.2,57.79,57.79,0,0,1,9.09-1.72,67.92,67.92,0,0,1,10.46-.62,82.89,82.89,0,0,1,10.49,1.34,42.31,42.31,0,0,1,11,3.66c2.35,1.1,4.65,2.36,6.95,3.61,3.22,1.74,6.42,3.55,9.64,5.29,2.72,1.48,5.46,2.91,8.19,4.34a3.12,3.12,0,0,0,.89.21l.15-.3q-12.55-17.11-25.1-34.22l.2-.23,29.9,38.52-.13.29c-1.46-.54-2.95-1-4.38-1.64-5.65-2.61-11.3-5.24-16.93-8-2.28-1.11-4.43-2.65-6.73-3.64-3.35-1.44-6.77-2.65-10.2-3.78-5-1.65-10.07-1.87-15.16-1.74a77.22,77.22,0,0,0-9.07.93,70.52,70.52,0,0,0-13.91,3.79,112.72,112.72,0,0,0-15.19,7.06c-1.24.67-2.44,1.42-3.66,2.13l.08.43a4.69,4.69,0,0,0,.84-.09c2.86-.79,5.69-1.78,8.58-2.34a113.32,113.32,0,0,1,12.53-1.85,70.44,70.44,0,0,1,10.27.11c3.19.2,6.37.61,9.54,1.13a70.06,70.06,0,0,1,7.88,1.8c3.45,1,6.91,2,10.29,3.4,3.94,1.58,7.81,3.43,11.66,5.32,4.13,2,8.19,4.29,12.3,6.37,1.5.76,3.07,1.35,4.62,2a7.32,7.32,0,0,0,1.55.21L630.5,619l.24-.22,4.18,6.74-.12.38a27.07,27.07,0,0,1-3.43-.91q-5.25-2.13-10.46-4.45c-4.08-1.82-8.09-3.89-12.22-5.53-3.65-1.45-7.41-2.54-11.15-3.65a71.22,71.22,0,0,0-7.38-1.76,82.59,82.59,0,0,0-8.95-1.23c-3.81-.24-7.64-.19-11.46-.22a7.13,7.13,0,0,0-1.55.32l0,.37a16.79,16.79,0,0,0,1.87.13,51.46,51.46,0,0,1,14.1,1.78,75.24,75.24,0,0,1,21,9.47c4,2.47,8.11,4.5,12.23,6.57,2.86,1.44,5.81,2.64,8.72,3.91.91.39,1.85.66,2.77,1l0,.32a24,24,0,0,1-2.87-.8c-4.61-1.86-9.25-3.63-13.8-5.72-4.34-2-8.56-4.4-12.86-6.56a61.16,61.16,0,0,0-13-4.8,61.8,61.8,0,0,0-21.46-1.3A69.53,69.53,0,0,0,550.23,616a99.07,99.07,0,0,0-26.46,13.9,39.5,39.5,0,0,1-4,2.27,1.14,1.14,0,0,0-.45.59c44.18,4.36,88.29,9.26,132.34,15.08l.22-.41-7.59-9.67.19-.26,11.1,12.18c-1.25,0-2.26,0-3.28,0-5.52-.19-11-.35-16.55-.61-7.34-.33-14.68-.76-22-1.12-4.31-.21-8.62-.32-12.93-.55-6.59-.37-13.18-.82-19.77-1.2-3.62-.21-7.24-.32-10.86-.55-6.1-.38-12.19-.83-18.29-1.23-3.62-.24-7.25-.4-10.87-.66-5.31-.38-10.62-.81-15.93-1.23-2.08-.16-4.16-.39-6.25-.46-.39,0-.88.5-1.17.93a23.53,23.53,0,0,1-7.86,7.78A20.76,20.76,0,0,1,496,653.44a38.13,38.13,0,0,1-9-2.51c-1.69-.72-3.32-1.69-5-2.52a3.16,3.16,0,0,0-1.38-.45c-7.29.22-14.58.49-21.87.74-2.61.09-5.22.18-7.84.25-20.92.52-41.84,1.08-62.76,1.55-9.35.21-18.7.28-28.05.36-4.91,0-9.81,0-14.71,0A7,7,0,0,1,344.42,650.68Zm26.92-5.55v.28c.58,0,1.16,0,1.74,0,5.7-.49,11.4-1,17.1-1.48q10.86-.85,21.72-1.61,13-.91,26.12-1.76,6.6-.43,13.22-.77c9.53-.48,19.07-.92,28.6-1.39a4.82,4.82,0,0,0,.74-.14,21,21,0,0,0-3.92-1.27c-3.39-.82-6.76-1.77-10.16-2.42-4.26-.81-8.52-1.58-12.81-2a105.2,105.2,0,0,0-12.92-.44q-8.67.23-17.32,1.06c-3.67.35-7.31,1.18-11,1.82-1.23.21-2.44.51-3.66.78-1.51.33-3,.62-4.52,1-2,.51-4.08,1.07-6.11,1.63-2.51.7-5,1.43-7.52,2.15-2.73.77-5.44,1.62-8.18,2.3-2.53.63-5.08,1.09-7.62,1.61C373.69,644.72,372.51,644.92,371.34,645.13Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M514.21,634.24c-8.45-4.19-16.4-3.19-23.86,3.54.55-2.75,5.88-7.55,9.33-8.48C505.17,627.82,510,629.71,514.21,634.24Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M374.59,645.13c1.18-.21,2.36-.41,3.54-.65,2.54-.52,5.09-1,7.61-1.61,2.74-.68,5.46-1.53,8.19-2.3,2.5-.72,5-1.45,7.52-2.15,2-.56,4.06-1.12,6.1-1.63,1.5-.38,3-.67,4.53-1,1.21-.27,2.43-.57,3.65-.78,3.66-.64,7.3-1.47,11-1.82q8.64-.83,17.32-1.06a105.27,105.27,0,0,1,12.92.44c4.28.41,8.55,1.18,12.8,2,3.41.65,6.78,1.6,10.17,2.42a21,21,0,0,1,3.92,1.27,5.05,5.05,0,0,1-.74.14c-9.54.47-19.07.91-28.61,1.39q-6.6.33-13.21.77-13.06.86-26.13,1.76-10.86.77-21.71,1.61c-5.7.45-11.4,1-17.1,1.48-.58.05-1.16,0-1.74,0Z"
                transform="translate(-200.12 -123.81)"
              />
            </g>
            <g id="Iqra_-_arabiska" data-name="Iqra - arabiska">
              <path
                d="M527.32,170.14q2.71,35.19,2.71,37.7a30.69,30.69,0,0,1-.34,4.92,7.11,7.11,0,0,0-.11,2c.08.3.25.26.5-.14a8.24,8.24,0,0,0,.66-1.36,27.35,27.35,0,0,0,2-10.79q0-2-2.53-34.88t-2.54-33.13c0-.43.1-.55.28-.35q2.35,2.63,2.36,1.42a4,4,0,0,0-.23-1.1q-.27-1-2-5.22c-1.07-2.68-1.76-4.31-2.06-4.92-.15-.29-.27-.44-.39-.45s-.2.15-.34.42a16.77,16.77,0,0,0-1.58,4.37,8.63,8.63,0,0,1,.86,4.16Q524.6,135,527.32,170.14Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M464.27,140q-.18-.37-.33-.39c-.08,0-.17.13-.29.36a14.36,14.36,0,0,0-1.34,3.71,7.51,7.51,0,0,1,.73,3.54q0,1.88,2.31,31.79t2.3,32.06a26.87,26.87,0,0,1-.28,4.18,5.73,5.73,0,0,0-.1,1.68c.07.25.21.22.43-.12a7.2,7.2,0,0,0,.55-1.16,23.23,23.23,0,0,0,1.71-9.18q0-1.68-2.15-29.66t-2.15-28.17c0-.37.08-.47.23-.3,1.34,1.49,2,1.89,2,1.21a3.49,3.49,0,0,0-.19-.93q-.24-.84-1.69-4.44C465.11,141.9,464.53,140.51,464.27,140Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M503.22,224.8v0q13.9-5.53,15.68-7.24a13.12,13.12,0,0,0,4-10,18.25,18.25,0,0,0-4-11.8q-3.72-4.55-8-4.55-2.6,0-5.06,3.41a11.52,11.52,0,0,0-2.47,6.78,5.64,5.64,0,0,0,1.49,4,5.35,5.35,0,0,0,4.07,1.58h4.58a10.61,10.61,0,0,1,4.82,1.18c1.69.85,2.54,1.77,2.54,2.75q0,.83-7.43,3.9-5.11,2-10.2,4v0c-5.68,2.26-9.66,4-12,5.15a35,35,0,0,0-9.49,6.85l-5.56,6.23q-4.38,4.08-8.66,4.09a4.63,4.63,0,0,1-3.79-1.67,6.29,6.29,0,0,1-1.28-4.14q0-3.37,2.26-9.2c1.51-3.88,2.25-6.16,2.25-6.83,0-.15,0-.23-.13-.26s-.49.34-.87,1q-5.28,9.74-5.29,15.77a10.84,10.84,0,0,0,2.71,7.44,7.84,7.84,0,0,0,6,2.9q4.13,0,8.19-4.4a86.43,86.43,0,0,1,10.42-10,43.55,43.55,0,0,1,7.17-3.72Q497.86,227,503.22,224.8Zm7.28-24.09c-1.87-.22-2.81-.84-2.81-1.87s.75-1.37,2.25-1.37c2.09,0,4,1.19,5.63,3.57Q512.14,200.74,510.5,200.71Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M508.91,180.54c-.1,0-.2.09-.28.25l-1.1,2.13a14,14,0,0,0-1.81-1.28,7,7,0,0,0-1.58-.88c-.1,0-.19.08-.28.25l-1.38,2.67a.34.34,0,0,0,0,.15.13.13,0,0,0,0,.09c1.15.68,2.27,1.41,3.35,2.18a.24.24,0,0,0,.12.05.32.32,0,0,0,.24-.19,17.89,17.89,0,0,0,1.19-2.19q1.78,1.11,3.21,2.1a.21.21,0,0,0,.12,0,.33.33,0,0,0,.25-.18,7.71,7.71,0,0,0,1.44-2.89c0-.12-.55-.53-1.64-1.24A9.35,9.35,0,0,0,508.91,180.54Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M542.21,215a.08.08,0,0,0,0-.07h0a1.38,1.38,0,0,0-.34.12q-14.43,6.81-28.47,13.4-18,8.56-21,10.36a9.15,9.15,0,0,0-.54,1.93q2.26-1.52,22.05-11l27.77-13.29a3.39,3.39,0,0,0,.54-1.16A.74.74,0,0,0,542.21,215Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M463.38,136c.41,0,1.09-.69,2-2.06a6.62,6.62,0,0,0,1.41-2.83c0-.77-.82-1.21-2.48-1.32s-2.49-.39-2.49-.86c0-.23.32-.61,1-1.15a3,3,0,0,1,1.33-.8.38.38,0,0,1,.42.27.38.38,0,0,0,.4.28c.37,0,.71-.35,1-1a4.34,4.34,0,0,0,.38-1.65.89.89,0,0,0-1-1c-.79,0-1.88.82-3.28,2.46-1.48,1.79-2.22,3.38-2.22,4.81A1.62,1.62,0,0,0,461,132.7a6.53,6.53,0,0,0,2.15.32q1.14,0,1.14.15,0,.47-2.82,1.71-3.69,1.62-3.69,1.83c0,.1.24.14.71.14a15.2,15.2,0,0,0,3-.41Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M487.66,186a1.72,1.72,0,0,0,1,.51q.31,0,.39-.15c0-.09.14-.14.3-.14s.64.9,1.27,2.69a14.28,14.28,0,0,1,.93,3.3c0,.28.06.43.17.43s.29-.16.48-.47a9.09,9.09,0,0,0,.71-2.36q1-5.28,1.81-5.28a1,1,0,0,1,.75.44c.25.29.41.44.48.44s.32-.19.45-.57a2.26,2.26,0,0,0,.15-.7,1.58,1.58,0,0,0-.43-.89,1.34,1.34,0,0,0-1-.63c-.65,0-1.24.61-1.79,1.85a48.68,48.68,0,0,0-1.16,5.32L492,190s0,0,0,0l0,0a1.6,1.6,0,0,0,0-.26,13.28,13.28,0,0,0-1.45-4.24c-.76-1.39-1.52-2.08-2.28-2.08-.09,0-.29.27-.63.79a3.48,3.48,0,0,0-.49.92C487.07,185.35,487.27,185.62,487.66,186Z"
                transform="translate(-200.12 -123.81)"
                stroke="#231f20"
                stroke-miterlimit="10"
                stroke-width="0.5"
              />
              <path
                d="M479.06,182.68h.05c.52,0,1-.37,1.46-1.12a6.53,6.53,0,0,0,.85-2.53.86.86,0,0,0,0-.15.28.28,0,0,0,0-.1s0-.05,0-.05l0,0a.53.53,0,0,0-.16.22c-.52.94-1,1.46-1.55,1.56h-.1a.82.82,0,0,1-.61-.4,2.85,2.85,0,0,1-.44-1.72,8.54,8.54,0,0,1,.23-1.83,35,35,0,0,1,2.55-6.71,2.84,2.84,0,0,0,.24-.64v0c-.09,0-.26.22-.53.6a23.31,23.31,0,0,0-2.1,4.37,17.94,17.94,0,0,0-1.47,5.31c0,.1,0,.2,0,.3a4.49,4.49,0,0,0,.4,2A1.37,1.37,0,0,0,479.06,182.68Z"
                transform="translate(-200.12 -123.81)"
                stroke="#231f20"
                stroke-miterlimit="10"
                stroke-width="0.5"
              />
              <path
                d="M500.93,169.91l.38-.12,2.2-.75q5.82-1.68,6.06-.95a.24.24,0,0,1,0,.21,30.15,30.15,0,0,1-3.15,3.22,40,40,0,0,0-3.44,3.45,7.16,7.16,0,0,0-.54.78h.06a7,7,0,0,0,.92-.48q5.4-3.17,6.22-4.15a15.38,15.38,0,0,0,2.29-4.45c.62-1.71.86-2.77.73-3.17-.32-1-2.72-.82-7.2.48a25.22,25.22,0,0,0-2.66.87A3,3,0,0,0,501,166.7l-.67,2.61a1.67,1.67,0,0,0-.08.65C500.23,170.06,500.48,170,500.93,169.91Z"
                transform="translate(-200.12 -123.81)"
              />
              <path
                d="M495.84,200.88c.17,0,.39-.3.65-.75a2.33,2.33,0,0,0,.41-1,.12.12,0,0,0-.09-.13c-.52,0-3.15,1-7.91,3a117.41,117.41,0,0,0-13,6.19,10.88,10.88,0,0,0-.94,2.38q4.35-2.42,11.84-5.83Q493.49,201.69,495.84,200.88Z"
                transform="translate(-200.12 -123.81)"
              />
            </g>
            <g id="Cirkel">
              <path
                d="M377.87,771.24C274.53,724.64,202.6,620.72,202.6,500c0-143.19,101.2-262.74,236-291"
                transform="translate(-200.12 -123.81)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="4.98"
              />
              <path
                d="M559.94,208.65C695.45,236.38,797.4,356.28,797.4,500c0,120.16-71.27,223.68-173.84,270.59"
                transform="translate(-200.12 -123.81)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="4.98"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
