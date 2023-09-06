/* eslint-disable max-len */
/* jshint ignore:start */

export const IconSprite = () => {
  const styles = `
    .icon { display: none; }
    .icon:target { display: inline; }
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <style>{styles}</style>
      </defs>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="arrow-down">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4712 5.52864C12.7316 5.78899 12.7316 6.2111 12.4712 6.47145L8.47124 10.4714C8.21089 10.7318 7.78878 10.7318 7.52843 10.4714L3.52843 6.47144C3.26808 6.2111 3.26808 5.78899 3.52843 5.52864C3.78878 5.26829 4.21089 5.26829 4.47124 5.52864L7.99984 9.05723L11.5284 5.52864C11.7888 5.26829 12.2109 5.26829 12.4712 5.52864Z"
          />
        </symbol>
        <symbol id="arrow-left">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4712 3.52861C10.2109 3.26826 9.78878 3.26826 9.52843 3.52861L5.52843 7.52861C5.26808 7.78896 5.26808 8.21107 5.52843 8.47141L9.52843 12.4714C9.78878 12.7318 10.2109 12.7318 10.4712 12.4714C10.7316 12.2111 10.7316 11.789 10.4712 11.5286L6.94265 8.00001L10.4712 4.47141C10.7316 4.21107 10.7316 3.78896 10.4712 3.52861Z"
          />
        </symbol>
        <symbol id="arrow-right">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
          />
        </symbol>
        <symbol id="arrow-up">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.52876 10.4714C3.26841 10.211 3.26841 9.7889 3.52876 9.52855L7.52876 5.52856C7.78911 5.26821 8.21122 5.26821 8.47157 5.52856L12.4716 9.52856C12.7319 9.78891 12.7319 10.211 12.4716 10.4714C12.2112 10.7317 11.7891 10.7317 11.5288 10.4714L8.00016 6.94277L4.47157 10.4714C4.21122 10.7317 3.78911 10.7317 3.52876 10.4714Z"
          />
        </symbol>
        <symbol id="arrow-up-white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.52845 10.4712C3.2681 10.2109 3.2681 9.78878 3.52845 9.52843L7.52845 5.52843C7.7888 5.26808 8.21091 5.26808 8.47126 5.52843L12.4713 9.52843C12.7316 9.78878 12.7316 10.2109 12.4713 10.4712C12.2109 10.7316 11.7888 10.7316 11.5285 10.4712L7.99986 6.94265L4.47126 10.4712C4.21091 10.7316 3.7888 10.7316 3.52845 10.4712Z"
            fill="#F1F2F9"
          />
        </symbol>
        <symbol viewBox="0 0 15.668 14.853" id="close">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4716 4.4714C12.7319 4.21105 12.7319 3.78894 12.4716 3.52859C12.2112 3.26824 11.7891 3.26824 11.5288 3.52859L8.00016 7.05719L4.47157 3.52859C4.21122 3.26824 3.78911 3.26824 3.52876 3.52859C3.26841 3.78894 3.26841 4.21105 3.52876 4.4714L7.05735 7.99999L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.9428L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99999L12.4716 4.4714Z"
          />
        </symbol>
        <symbol viewBox="0 0 15.668 14.853" id="heart">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.62852 1.63137C10.1584 1.4118 10.7264 1.29878 11.3 1.29878C11.8737 1.29878 12.4416 1.4118 12.9716 1.63137C13.5015 1.85094 13.983 2.17277 14.3885 2.57847C14.7941 2.98394 15.1158 3.46532 15.3353 3.99514C15.5549 4.52506 15.6679 5.09305 15.6679 5.66667C15.6679 6.24028 15.5549 6.80827 15.3353 7.33819C15.1158 7.86806 14.794 8.34949 14.3884 8.75497C14.3883 8.75501 14.3884 8.75493 14.3884 8.75497L8.49502 14.6483C8.22165 14.9217 7.77844 14.9217 7.50507 14.6483L1.61174 8.75497C0.792668 7.9359 0.33252 6.82501 0.33252 5.66667C0.33252 4.50833 0.792668 3.39743 1.61174 2.57836C2.43081 1.75929 3.54171 1.29914 4.70005 1.29914C5.85839 1.29914 6.96928 1.75929 7.78835 2.57836L8.00005 2.79005L8.21162 2.57847C8.21158 2.57851 8.21166 2.57844 8.21162 2.57847C8.61711 2.17283 9.09865 1.85092 9.62852 1.63137ZM13.3983 3.56819C13.1228 3.29256 12.7957 3.07392 12.4357 2.92474C12.0756 2.77556 11.6898 2.69878 11.3 2.69878C10.9103 2.69878 10.5245 2.77556 10.1644 2.92474C9.80441 3.07392 9.4773 3.29256 9.2018 3.56819L8.49502 4.27497C8.22165 4.54834 7.77844 4.54834 7.50507 4.27497L6.7984 3.56831C6.24189 3.01179 5.48708 2.69914 4.70005 2.69914C3.91301 2.69914 3.15821 3.01179 2.60169 3.56831C2.04517 4.12483 1.73252 4.87963 1.73252 5.66667C1.73252 6.4537 2.04517 7.20851 2.60169 7.76502L8.00005 13.1634L13.3984 7.76502C13.674 7.48953 13.8928 7.16231 14.042 6.80228C14.1911 6.44226 14.2679 6.05637 14.2679 5.66667C14.2679 5.27696 14.1911 4.89107 14.042 4.53105C13.8928 4.17103 13.6739 3.84369 13.3983 3.56819Z"
          />
        </symbol>
        <symbol viewBox="0 0 15.668 14.853" id="heart-field">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3 1.29878C10.7264 1.29878 10.1584 1.4118 9.62852 1.63137C9.09865 1.85092 8.61711 2.17283 8.21162 2.57847L8.00005 2.79005L7.78835 2.57836C6.96928 1.75929 5.85839 1.29914 4.70005 1.29914C3.54171 1.29914 2.43081 1.75929 1.61174 2.57836C0.792668 3.39743 0.33252 4.50833 0.33252 5.66667C0.33252 6.82501 0.792668 7.9359 1.61174 8.75497L7.50507 14.6483C7.77844 14.9217 8.22165 14.9217 8.49502 14.6483L14.3884 8.75497C14.794 8.34949 15.1158 7.86806 15.3353 7.33819C15.5549 6.80827 15.6679 6.24028 15.6679 5.66667C15.6679 5.09305 15.5549 4.52506 15.3353 3.99514C15.1158 3.46532 14.7941 2.98394 14.3885 2.57847C13.983 2.17277 13.5015 1.85094 12.9716 1.63137C12.4416 1.4118 11.8737 1.29878 11.3 1.29878Z"
          />
        </symbol>
        <symbol viewBox="0 0 14.666667 15.333333" id="home">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.59087 0.807088C7.83161 0.619846 8.16872 0.619846 8.40946 0.807088L14.4095 5.47375C14.5718 5.60006 14.6668 5.79426 14.6668 5.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V5.99999C1.3335 5.79426 1.42848 5.60006 1.59087 5.47375L7.59087 0.807088ZM2.66683 6.32605V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V6.32605L8.00016 2.1779L2.66683 6.32605Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.3335 8.00001C5.3335 7.63182 5.63197 7.33334 6.00016 7.33334H10.0002C10.3684 7.33334 10.6668 7.63182 10.6668 8.00001V14.6667C10.6668 15.0349 10.3684 15.3333 10.0002 15.3333C9.63197 15.3333 9.3335 15.0349 9.3335 14.6667V8.66668H6.66683V14.6667C6.66683 15.0349 6.36835 15.3333 6.00016 15.3333C5.63197 15.3333 5.3335 15.0349 5.3335 14.6667V8.00001Z"
          />
        </symbol>
        <symbol id="minus">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z"
          />
        </symbol>
        <symbol id="plus">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.6665 3.33334C8.6665 2.96515 8.36803 2.66667 7.99984 2.66667C7.63165 2.66667 7.33317 2.96515 7.33317 3.33334V7.33334H3.33317C2.96498 7.33334 2.6665 7.63182 2.6665 8.00001C2.6665 8.3682 2.96498 8.66667 3.33317 8.66667H7.33317V12.6667C7.33317 13.0349 7.63165 13.3333 7.99984 13.3333C8.36803 13.3333 8.6665 13.0349 8.6665 12.6667V8.66667H12.6665C13.0347 8.66667 13.3332 8.3682 13.3332 8.00001C13.3332 7.63182 13.0347 7.33334 12.6665 7.33334H8.6665V3.33334Z"
          />
        </symbol>
        <symbol viewBox="0 0 14.667 14.667" id="search">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.66683 7.33334C2.66683 4.75601 4.75617 2.66668 7.3335 2.66668C9.91083 2.66668 12.0002 4.75601 12.0002 7.33334C12.0002 8.59061 11.503 9.73176 10.6945 10.5709C10.6716 10.5884 10.6497 10.6077 10.6287 10.6286C10.6078 10.6495 10.5886 10.6715 10.571 10.6943C9.73189 11.5028 8.59075 12 7.3335 12C4.75617 12 2.66683 9.91067 2.66683 7.33334ZM11.0786 12.0213C10.0522 12.8424 8.75016 13.3333 7.3335 13.3333C4.01979 13.3333 1.3335 10.6471 1.3335 7.33334C1.3335 4.01963 4.01979 1.33334 7.3335 1.33334C10.6472 1.33334 13.3335 4.01963 13.3335 7.33334C13.3335 8.75003 12.8425 10.052 12.0214 11.0785L14.4715 13.5286C14.7319 13.789 14.7319 14.2111 14.4715 14.4714C14.2112 14.7318 13.7891 14.7318 13.5287 14.4714L11.0786 12.0213Z"
          />
        </symbol>
        <symbol viewBox="0 0 14.666667 15.333333" id="shopping-bag">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.46683 0.933323C3.59273 0.765453 3.79032 0.666656 4.00016 0.666656H12.0002C12.21 0.666656 12.4076 0.765453 12.5335 0.933323L14.5335 3.59999C14.62 3.71539 14.6668 3.85574 14.6668 3.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V3.99999C1.3335 3.85574 1.38028 3.71539 1.46683 3.59999L3.46683 0.933323ZM4.3335 1.99999L2.66683 4.22221V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V4.22221L11.6668 1.99999H4.3335Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.3335 4.00001C1.3335 3.63182 1.63197 3.33334 2.00016 3.33334H14.0002C14.3684 3.33334 14.6668 3.63182 14.6668 4.00001C14.6668 4.3682 14.3684 4.66668 14.0002 4.66668H2.00016C1.63197 4.66668 1.3335 4.3682 1.3335 4.00001Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.33366 6C5.70185 6 6.00033 6.29848 6.00033 6.66667C6.00033 7.1971 6.21104 7.70581 6.58611 8.08088C6.96118 8.45595 7.46989 8.66667 8.00033 8.66667C8.53076 8.66667 9.03947 8.45595 9.41454 8.08088C9.78961 7.70581 10.0003 7.1971 10.0003 6.66667C10.0003 6.29848 10.2988 6 10.667 6C11.0352 6 11.3337 6.29848 11.3337 6.66667C11.3337 7.55072 10.9825 8.39857 10.3573 9.02369C9.73223 9.64881 8.88438 10 8.00033 10C7.11627 10 6.26842 9.64881 5.6433 9.02369C5.01818 8.39857 4.66699 7.55072 4.66699 6.66667C4.66699 6.29848 4.96547 6 5.33366 6Z"
          />
        </symbol>
        <symbol viewBox="0 0 15.668 14.853" id="burger">
          <path d="M1 4.5C1 4.08579 1.39175 3.75 1.875 3.75H14.125C14.6082 3.75 15 4.08579 15 4.5C15 4.91421 14.6082 5.25 14.125 5.25H1.875C1.39175 5.25 1 4.91421 1 4.5Z" />
          <path d="M1 8C1 7.58579 1.39175 7.25 1.875 7.25H14.125C14.6082 7.25 15 7.58579 15 8C15 8.41421 14.6082 8.75 14.125 8.75H1.875C1.39175 8.75 1 8.41421 1 8Z" />
          <path d="M1.875 10.75C1.39175 10.75 1 11.0858 1 11.5C1 11.9142 1.39175 12.25 1.875 12.25H14.125C14.6082 12.25 15 11.9142 15 11.5C15 11.0858 14.6082 10.75 14.125 10.75H1.875Z" />
        </symbol>
        <symbol viewBox="0 0 16 16" id="sun">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
        <symbol viewBox="0 0 16 16" id="moon">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </symbol>
      </svg>
    </svg>
  );
};

/* jshint ignore:end */
