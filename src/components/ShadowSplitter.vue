<template>
  <svg
    width="666"
    height="13"
    viewBox="0 0 666 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="splitter"
  >
    <g filter="url(#filter0_d)">
      <ellipse cx="333" cy="2.5" rx="329" ry="2.5" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="666"
        height="13"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
<script>
export default {
  name: "ShadowSplitter"
};
</script>
<style scoped lang="less">
.splitter {
  width: 100%;
  margin: 15px 0;
}
</style>
