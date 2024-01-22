import React from 'react';
import { FlexBoxRow } from '../FlexBox/FlexBox';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';

export default function CluesArticle(): JSX.Element {
  return (
    <div className="flexBoxMain" id="reports">
      <Title>Ключевые выгоды</Title>
      <div className="flexBoxMain">
        <Text bigger>
          Вместо того, чтобы часами копировать и вставлять, приводить к одному формату, проверять
          данные на целостность, ваша команда наконец-то займется работой, которую пока не могут
          выполнять роботы. А вы повысите ROI на ФОТ.
        </Text>
      </div>
      <FlexBoxRow className="sectionBox">
        <section className="flexBoxSection">
          {' '}
          <svg
            className="iconSection"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="#ef2a82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_32)">
              <path
                d="M47.2479 6.71074C42.2338 2.99684 36.2834 1.03453 30.0403 1.03453C24.3475 1.03453 18.692 2.67316 14.4827 5.48484V1.03453C14.4827 0.463477 14.0192 0 13.4482 0C12.8771 0 12.4136 0.463477 12.4136 1.03453V7.54242C12.4136 7.94379 12.6453 8.30894 13.0085 8.47863C13.3715 8.64937 13.8009 8.59453 14.1092 8.33789C18.0547 5.06063 24.0103 3.10336 30.0403 3.10336C35.8365 3.10336 41.3606 4.92609 46.0168 8.3741C46.202 8.51062 46.4171 8.57684 46.6313 8.57684C46.9479 8.57684 47.2603 8.43199 47.463 8.15789C47.8034 7.69863 47.7072 7.05105 47.2479 6.71074Z"
                fill="#ef2a82"
              />
              <path
                d="M58.9654 12.4138H52.4575C52.0562 12.4138 51.693 12.6465 51.5224 13.0097C51.3516 13.3727 51.4065 13.8021 51.6631 14.1104C54.9404 18.0549 56.8976 24.0104 56.8976 30.0415C56.8976 35.8377 55.0749 41.3618 51.6269 46.0169C51.2866 46.4762 51.3828 47.1238 51.8421 47.4642C52.0272 47.6007 52.2424 47.6669 52.4566 47.6669C52.7731 47.6669 53.0855 47.5221 53.2893 47.248C57.0031 42.2339 58.9655 36.2834 58.9655 30.0404C58.9655 24.3477 57.3269 18.6911 54.5152 14.4828H58.9655C59.5366 14.4828 60.0001 14.0193 60.0001 13.4483C59.9999 12.8772 59.5365 12.4138 58.9654 12.4138Z"
                fill="#ef2a82"
              />
              <path
                d="M46.9925 51.5224C46.6294 51.3527 46.2011 51.4055 45.8917 51.6632C41.9463 54.9404 35.9907 56.8977 29.9607 56.8977C24.1634 56.8977 18.6393 55.075 13.9841 51.627C13.5249 51.2866 12.8773 51.3829 12.5369 51.8421C12.1966 52.3014 12.2928 52.949 12.752 53.2894C17.7661 57.0032 23.7166 58.9656 29.9596 58.9656C35.6523 58.9656 41.3079 57.327 45.5172 54.5153V58.9656C45.5172 59.5366 45.9807 60.0001 46.5517 60.0001C47.1228 60.0001 47.5863 59.5366 47.5863 58.9656V52.4577C47.5863 52.0562 47.3546 51.6911 46.9925 51.5224Z"
                fill="#ef2a82"
              />
              <path
                d="M8.33789 45.8908C5.06063 41.9453 3.10336 35.9908 3.10336 29.9597C3.10336 24.1635 4.92609 18.6394 8.37305 13.9842C8.71336 13.525 8.61715 12.8774 8.15789 12.537C7.69863 12.1956 7.05105 12.2929 6.71063 12.7521C2.99684 17.7662 1.03453 23.7165 1.03453 29.9597C1.03453 35.6524 2.67316 41.308 5.48484 45.5173H1.03453C0.463477 45.5173 0 45.9808 0 46.5518C0 47.1229 0.463477 47.5863 1.03453 47.5863H7.54242C7.94379 47.5863 8.30789 47.3547 8.47863 46.9915C8.64937 46.6283 8.59453 46.199 8.33789 45.8908Z"
                fill="#ef2a82"
              />
              <path
                d="M31.0345 19.653C31.0335 19.082 30.57 18.6206 30 18.6206C30 18.6206 29.9989 18.6206 29.9979 18.6206C29.4258 18.6217 28.9644 19.0861 28.9655 19.6571L28.9903 30.002C28.9914 30.573 29.4548 31.0344 30.0248 31.0344C30.0259 31.0344 30.0269 31.0344 30.0269 31.0344C30.5991 31.0333 31.0604 30.5689 31.0594 29.9979L31.0345 19.653Z"
                fill="#ef2a82"
              />
              <path
                d="M30.0248 28.9655H23.7931C23.2221 28.9655 22.7586 29.4289 22.7586 30C22.7586 30.571 23.2221 31.0345 23.7931 31.0345H30.0248C30.5959 31.0345 31.0593 30.571 31.0593 30C31.0593 29.4289 30.5959 28.9655 30.0248 28.9655Z"
                fill="#ef2a82"
              />
              <path
                d="M30 8.27594C18.0217 8.27594 8.27594 18.0208 8.27594 30C8.27594 41.9793 18.0217 51.7241 30 51.7241C41.9793 51.7241 51.7241 41.9793 51.7241 30C51.7241 18.0208 41.9793 8.27594 30 8.27594ZM30 49.6552C19.1617 49.6552 10.3449 40.8384 10.3449 30C10.3449 19.1617 19.1617 10.3449 30 10.3449C40.8384 10.3449 49.6552 19.1617 49.6552 30C49.6552 40.8384 40.8384 49.6552 30 49.6552Z"
                fill="#ef2a82"
              />
              <path
                d="M15.5172 28.9655H13.4483C12.8772 28.9655 12.4138 29.4289 12.4138 30C12.4138 30.571 12.8772 31.0345 13.4483 31.0345H15.5172C16.0883 31.0345 16.5518 30.571 16.5518 30C16.5518 29.4289 16.0883 28.9655 15.5172 28.9655Z"
                fill="#ef2a82"
              />
              <path
                d="M46.5516 28.9655H44.4827C43.9116 28.9655 43.4482 29.4289 43.4482 30C43.4482 30.571 43.9116 31.0345 44.4827 31.0345H46.5516C47.1227 31.0345 47.5862 30.571 47.5862 30C47.5862 29.4289 47.1227 28.9655 46.5516 28.9655Z"
                fill="#ef2a82"
              />
              <path
                d="M30 43.4483C29.4289 43.4483 28.9655 43.9118 28.9655 44.4828V46.5518C28.9655 47.1228 29.4289 47.5863 30 47.5863C30.571 47.5863 31.0345 47.1228 31.0345 46.5518V44.4828C31.0345 43.9117 30.571 43.4483 30 43.4483Z"
                fill="#ef2a82"
              />
              <path
                d="M30 12.4138C29.4289 12.4138 28.9655 12.8772 28.9655 13.4483V15.5172C28.9655 16.0883 29.4289 16.5518 30 16.5518C30.571 16.5518 31.0345 16.0883 31.0345 15.5172V13.4483C31.0345 12.8772 30.571 12.4138 30 12.4138Z"
                fill="#ef2a82"
              />
              <path
                d="M20.3865 39.6135C19.9831 39.2089 19.3282 39.2089 18.9238 39.6135L17.5645 40.9718C17.1611 41.3753 17.1611 42.0301 17.5645 42.4345C17.7662 42.6362 18.0311 42.7376 18.2959 42.7376C18.5607 42.7376 18.8256 42.6373 19.0273 42.4345L20.3865 41.0762C20.79 40.6727 20.79 40.0179 20.3865 39.6135Z"
                fill="#ef2a82"
              />
              <path
                d="M42.4345 17.5655C42.03 17.161 41.3762 17.161 40.9718 17.5655L39.6135 18.9238C39.2089 19.3283 39.2089 19.9821 39.6135 20.3865C39.8151 20.5882 40.08 20.6896 40.3448 20.6896C40.6097 20.6896 40.8745 20.5882 41.0762 20.3865L42.4345 19.0282C42.8389 18.6238 42.8389 17.97 42.4345 17.5655Z"
                fill="#ef2a82"
              />
              <path
                d="M42.4345 40.9717L41.0762 39.6133C40.6717 39.2088 40.0179 39.2088 39.6135 39.6133C39.2089 40.0179 39.2089 40.6717 39.6135 41.0761L40.9718 42.4344C41.1735 42.6361 41.4383 42.7374 41.7031 42.7374C41.968 42.7374 42.2328 42.6371 42.4345 42.4344C42.8389 42.03 42.8389 41.3762 42.4345 40.9717Z"
                fill="#ef2a82"
              />
              <path
                d="M20.3865 18.9238L19.0272 17.5655C18.6238 17.161 17.9689 17.161 17.5645 17.5655C17.16 17.97 17.16 18.6247 17.5645 19.0282L18.9238 20.3865C19.1254 20.5882 19.3903 20.6896 19.6551 20.6896C19.92 20.6896 20.1848 20.5882 20.3865 20.3865C20.791 19.9821 20.791 19.3273 20.3865 18.9238Z"
                fill="#ef2a82"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_32">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            {' '}
            <Title className="sectionTitle" small>
              В 5 раз быстрее сбор отчетов
            </Title>
            <p>
              Посчитайте время, которое вы сэкономите по сравнению с ручными выгрузками или старыми
              скриптами, которые постоянно надо чинить
            </p>
          </div>
        </section>
        <section className="flexBoxSection">
          {' '}
          <svg
            className="iconSection"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="#ef2a82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.0001 41.0001H27.0001C26.4481 41.0001 26.0001 41.4481 26.0001 42C26.0001 42.552 26.4481 43 27.0001 43H33.0001C33.552 43 34 42.552 34 42C34 41.4481 33.552 41.0001 33.0001 41.0001Z"
              fill="#ef2a82"
            />
            <path
              d="M55.999 1H4.00102C1.79496 1 0 2.79508 0 5.00102V38C0 38.5519 0.448008 38.9999 0.999961 38.9999H58.9999C59.5519 38.9999 59.9999 38.5519 59.9999 38V5.00102C60 2.79508 58.205 1 55.999 1ZM58 37H2.00004V5.00102C2.00004 3.89699 2.89805 3.00004 4.00102 3.00004H55.999C57.102 3.00004 58 3.89699 58 5.00102V37Z"
              fill="#ef2a82"
            />
            <path
              d="M59 36.9999H0.999961C0.448008 36.9999 0 37.448 0 38V42.9989C0 45.2049 1.79496 46.9999 4.00102 46.9999H55.999C58.205 46.9999 60 45.2049 60 42.9989L59.9999 38C59.9999 37.448 59.552 36.9999 59 36.9999ZM58 42.999C58 44.103 57.102 45 55.999 45H4.00102C2.89805 45 2.00004 44.103 2.00004 42.999V39H58.0001L58 42.999Z"
              fill="#ef2a82"
            />
            <path
              d="M54.9999 5.00005H5.00001C4.44806 5.00005 4.00005 5.44806 4.00005 6.00001V38C4.00005 38.552 4.44806 39 5.00001 39H55C55.552 39 56 38.552 56 38V6.00001C56 5.44806 55.552 5.00005 54.9999 5.00005ZM54 37H5.99997V6.99997H54V37Z"
              fill="#ef2a82"
            />
            <path
              d="M42.9999 53.0001H17C15.346 53.0001 14 54.3461 14 56.0001C14 57.6541 15.346 59.0001 17 59.0001H43C44.654 59.0001 46 57.6541 46 56.0001C46 54.3461 44.6539 53.0001 42.9999 53.0001ZM42.9999 57H17C16.4481 57 16 56.5511 16 56.0001C16 55.4491 16.4481 55.0001 17 55.0001H43C43.552 55.0001 44 55.4491 44 56.0001C44 56.5511 43.552 57 42.9999 57Z"
              fill="#ef2a82"
            />
            <path
              d="M41 53.0001C37.6819 53.0001 35.9999 50.6451 35.9999 46.0001C35.9999 45.4482 35.5519 45.0001 35 45.0001H25C24.4481 45.0001 24 45.4482 24 46.0001C24 50.6451 22.3181 53.0001 19 53.0001C18.4481 53.0001 18 53.4481 18 54C18 54.552 18.4481 55 19 55H41C41.5519 55 41.9999 54.552 41.9999 54C41.9999 53.4481 41.5519 53.0001 41 53.0001ZM23.8709 53.0001C25.102 51.6361 25.8269 49.605 25.9729 47.0001H34.0279C34.1729 49.605 34.8979 51.6361 36.1299 53.0001H23.8709Z"
              fill="#ef2a82"
            />
            <path
              d="M47.784 30.464L45.37 28.05L46.713 26.707C46.962 26.458 47.062 26.096 46.976 25.755C46.89 25.414 46.631 25.144 46.294 25.042L36.294 22.042C35.941 21.936 35.5601 22.033 35.3 22.2931C35.039 22.5531 34.9431 22.935 35.049 23.287L38.049 33.287C38.15 33.625 38.421 33.884 38.762 33.97C39.1019 34.054 39.465 33.9559 39.714 33.707L41.128 32.292L43.5419 34.707C43.729 34.8949 43.984 34.9999 44.2489 34.9999C44.5139 34.9999 44.7689 34.8949 44.9559 34.707L47.7839 31.8779C48.1749 31.487 48.1749 30.855 47.784 30.464ZM44.2489 32.586L42.0509 30.387C41.7959 30.132 41.462 30.0049 41.128 30.0049C40.7929 30.0049 40.459 30.1329 40.205 30.3859L39.483 31.1079L37.498 24.4909L44.115 26.4759L43.3409 27.25C43.1279 27.464 43.0109 27.748 43.0109 28.05C43.0109 28.3531 43.129 28.639 43.3429 28.851L45.6629 31.1709L44.2489 32.586Z"
              fill="#ef2a82"
            />
            <path
              d="M41.9999 9H14C13.448 9 13 9.44801 13 9.99996V15C13 15.552 13.448 16 14 16H41.9999C42.5519 16 42.9999 15.552 42.9999 15V9.99996C42.9999 9.44801 42.5519 9 41.9999 9ZM41 14H14.9999V11H41V14Z"
              fill="#ef2a82"
            />
            <path
              d="M26.0001 20.0001H18.0001C17.4481 20.0001 17.0001 20.4481 17.0001 21.0001V25C17.0001 25.552 17.4481 26 18.0001 26H26.0001C26.5521 26 27.0001 25.552 27.0001 25V21.0001C27.0001 20.4481 26.5521 20.0001 26.0001 20.0001ZM25.0001 24.0001H19.0001V22H25.0001V24.0001Z"
              fill="#ef2a82"
            />
            <path
              d="M41.9999 9H14C13.448 9 13 9.44801 13 9.99996V28.9999C13 29.5519 13.448 29.9999 14 29.9999H37.806C38.123 29.9999 38.42 29.8509 38.608 29.5969C38.7971 29.3429 38.8551 29.0149 38.764 28.7119L37.498 24.4909L41.713 25.7559C42.0161 25.847 42.3441 25.789 42.597 25.6C42.8509 25.412 43 25.114 43 24.7979L42.9999 9.99996C42.9999 9.44801 42.5519 9 41.9999 9ZM41 23.454L36.2929 22.042C35.9399 21.936 35.5589 22.033 35.2989 22.293C35.0379 22.554 34.942 22.935 35.0479 23.2881L36.4619 28.0001H14.9999V11H41V23.454Z"
              fill="#ef2a82"
            />
          </svg>
          <div>
            {' '}
            <Title className="sectionTitle" small>
              Натройка под вашу задачу
            </Title>
            <p>
              У вас постоянно появляются новые гипотезы, источники данных, а значит - требования к
              содержанию и формату отчетов
            </p>
          </div>
        </section>
        <section className="flexBoxSection">
          {' '}
          <svg
            className="iconSection"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="#ef2a82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_78)">
              <path
                d="M19.0635 23.3911C18.9035 23.0772 18.5905 22.8711 18.2396 22.8482L9.82723 22.2872C9.3913 22.2442 8.98829 22.5142 8.82927 22.9201L2.76476 38.419C2.60175 38.835 2.73476 39.3079 3.09077 39.5789C3.26878 39.7148 3.48276 39.7829 3.69569 39.7829C3.90662 39.7829 4.11768 39.7169 4.29568 39.583L9.32931 35.8083L12.2601 36.3942C12.7381 36.4893 13.216 36.2272 13.39 35.7703C14.964 31.6476 16.8588 27.8139 19.0196 24.3772C19.2066 24.079 19.2236 23.704 19.0635 23.3911ZM11.8281 34.2682L9.28231 33.7593C9.00435 33.7043 8.71431 33.7703 8.48638 33.9402L5.90758 35.874L10.4242 24.3309L16.4617 24.7329C14.7219 27.6778 13.168 30.8754 11.8281 34.2682Z"
                fill="#ef2a82"
              />
              <path
                d="M37.7131 50.174L37.1522 41.7606C37.1281 41.4086 36.9221 41.0957 36.6082 40.9356C36.2952 40.7757 35.9202 40.7916 35.6223 40.9796C32.1845 43.1404 28.3518 45.0353 24.2292 46.6091C23.7732 46.7821 23.5092 47.2601 23.6053 47.739L24.1912 50.6698L20.4165 55.7024C20.1485 56.0604 20.1496 56.5524 20.4205 56.9084C20.6135 57.1623 20.9105 57.3033 21.2165 57.3033C21.3384 57.3033 21.4615 57.2803 21.5814 57.2363L37.0802 51.1717C37.4861 51.013 37.7421 50.6089 37.7131 50.174ZM24.1251 54.0907L26.0589 51.5119C26.229 51.2849 26.295 50.995 26.2389 50.716L25.73 48.1712C29.1237 46.8313 32.3205 45.2774 35.2652 43.5375L35.6682 49.574L24.1251 54.0907Z"
                fill="#ef2a82"
              />
              <path
                d="M28.9978 30.0005H22.2603C21.8973 30.0005 21.5634 30.1975 21.3863 30.5145L12.9299 45.7094C12.7099 46.1054 12.7839 46.6013 13.1099 46.9153C13.3009 47.0993 13.5518 47.1953 13.8039 47.1953C13.9819 47.1953 14.1608 47.1483 14.3208 47.0503L29.5156 37.8551C29.8146 37.6741 29.9976 37.3501 29.9976 37.0002V31.0005C29.9977 30.4486 29.5497 30.0005 28.9978 30.0005ZM27.9979 36.4371L16.5098 43.3896L22.8474 32.0014V32.0003H27.9979V36.4371Z"
                fill="#ef2a82"
              />
              <path
                d="M59.9495 0.963709C59.9085 0.4768 59.5226 0.0907879 59.0356 0.0497726C58.7036 0.0237573 25.7751 -2.27509 11.5222 35.0561C11.3813 35.4252 11.4702 35.8411 11.7492 36.1201L16.5038 40.8747C16.7268 41.0977 17.0388 41.1996 17.3518 41.1577C17.6628 41.1127 17.9348 40.9247 18.0868 40.6497L22.8504 32.0004H27.9981V36.449L19.2967 41.9426C19.0397 42.1056 18.8708 42.3756 18.8368 42.6776C18.8028 42.9796 18.9087 43.2805 19.1238 43.4956L23.8784 48.2502C24.0694 48.4412 24.3244 48.5431 24.5853 48.5431C24.7053 48.5431 24.8263 48.5221 24.9423 48.4771C62.2753 34.2232 59.9775 1.29476 59.9495 0.963709ZM54.7039 18.7044C51.1951 27.3857 43.1657 39.1879 24.8321 46.3763L21.4224 42.9666L29.5318 37.8469C29.8217 37.663 29.9977 37.344 29.9977 37.001V31.0014C29.9977 30.4494 29.5497 30.0014 28.9978 30.0014H22.2583C21.8933 30.0014 21.5583 30.2004 21.3823 30.5194L16.9756 38.5208L13.6229 35.167C26.135 3.24755 52.805 1.94163 57.9896 2.01464C58.0266 4.34653 57.8126 11.012 54.7039 18.7044Z"
                fill="#ef2a82"
              />
              <path
                d="M17.1286 44.1645C16.9116 43.8765 16.5656 43.7365 16.2266 43.7725C16.2617 43.4325 16.1216 43.0875 15.8346 42.8705C14.3268 41.7306 12.3809 41.3516 10.4941 41.8295C8.49127 42.3385 6.85336 43.7044 6.00141 45.5793L0.0899437 58.5853C-0.0830233 58.9652 -0.00204756 59.4123 0.292911 59.7062C0.483924 59.8981 0.739859 59.9991 0.999896 59.9991C1.13993 59.9991 1.28091 59.9691 1.41392 59.9091L14.42 53.9966C16.2938 53.1457 17.6597 51.5078 18.1686 49.505C18.6476 47.6202 18.2686 45.6734 17.1286 44.1645ZM16.2307 49.013C15.8727 50.424 14.9109 51.5768 13.593 52.1768L3.01374 56.9855L7.82237 46.4053C8.42131 45.0874 9.57524 44.1254 10.9862 43.7676C11.3572 43.6736 11.7301 43.6275 12.098 43.6275C12.721 43.6275 13.3299 43.7605 13.8849 44.0195L12.933 45.7044C12.712 46.0953 12.779 46.5864 13.0969 46.9033C13.4149 47.2223 13.9059 47.2883 14.2959 47.0673L15.9808 46.1143C16.3907 46.9963 16.4837 48.0151 16.2307 49.013Z"
                fill="#ef2a82"
              />
              <path
                d="M59.9495 0.964828C59.9085 0.477918 59.5225 0.0919066 59.0355 0.0508914C58.6455 0.019837 49.3762 -0.682109 38.4751 4.33956C38.1781 4.4755 37.9671 4.74948 37.9091 5.07151C37.8511 5.39353 37.9551 5.72341 38.1861 5.95439L54.0449 21.8132C54.2339 22.0022 54.4889 22.1062 54.7519 22.1062C54.8109 22.1062 54.8699 22.1011 54.9289 22.0912C55.2509 22.0332 55.5238 21.8222 55.6608 21.5252C60.6834 10.624 59.9815 1.35377 59.9495 0.964828ZM54.4279 19.3664L40.6329 5.57142C48.6133 2.20267 55.6018 1.97064 57.9906 2.01072C58.0306 4.40155 57.8056 11.368 54.4279 19.3664Z"
                fill="#ef2a82"
              />
              <path
                d="M44.1606 15.8387C40.7978 12.4759 35.3273 12.4759 31.9646 15.8387C28.6018 19.2014 28.6018 24.6719 31.9646 28.0347C33.6455 29.7166 35.8543 30.5566 38.0621 30.5566C40.271 30.5566 42.4788 29.7156 44.1606 28.0347C47.5234 24.6719 47.5234 19.2013 44.1606 15.8387ZM42.7468 26.6207C40.164 29.2035 35.9613 29.2035 33.3785 26.6207C30.7957 24.038 30.7957 19.8353 33.3785 17.2525C34.6695 15.9616 36.3663 15.3157 38.0622 15.3157C39.7582 15.3157 41.455 15.9616 42.7469 17.2525C45.3295 19.8353 45.3295 24.038 42.7468 26.6207Z"
                fill="#ef2a82"
              />
              <path
                d="M40.05 23.925C38.9541 25.0229 37.1703 25.0219 36.0733 23.925C34.9773 22.8281 34.9773 21.0453 36.0733 19.9483C37.1692 18.8523 38.953 18.8514 40.05 19.9483C40.44 20.3392 41.074 20.3392 41.4638 19.9483C41.8548 19.5573 41.8548 18.9253 41.4638 18.5344C39.589 16.6586 36.5352 16.6586 34.6594 18.5344C32.7835 20.4102 32.7835 23.463 34.6594 25.3388C35.5974 26.2768 36.8303 26.7458 38.0622 26.7458C39.2951 26.7458 40.5269 26.2768 41.4638 25.3388C41.8548 24.9479 41.8548 24.3159 41.4638 23.925C41.0738 23.5341 40.44 23.5341 40.05 23.925Z"
                fill="#ef2a82"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_78">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            {' '}
            <Title className="sectionTitle" small>
              Данные для умных решений
            </Title>
            <p>
              Конечно, автоматические отчеты не заменят ваш опыт и вашу интуицию. Но подскажут как
              улучшить достижение KPI.
            </p>
          </div>
        </section>
      </FlexBoxRow>{' '}
    </div>
  );
}
