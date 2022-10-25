<template>
  <div class="bg-gray-900">
    <main>
      <!-- Hero section -->
      <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48 h-screen">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div>
            <div>
              <img
                class="h-11 w-auto"
                src="/img/logo.png"
                alt="Rejuvenate Finance"
              />
            </div>
            <div class="mt-20">
              <div>
                <a
                  href="#"
                  class="inline-flex space-x-4"
                  data-aos="fade-in"
                  data-aos-delay="700"
                >
                  <span
                    class="rounded bg-green-400 px-2.5 py-1 text-sm font-semibold text-green-50"
                    >WIP</span
                  >
                  <span
                    class="inline-flex items-center space-x-1 text-sm font-medium text-green-300"
                  >
                    <span>Project still in Development</span>
                    <Icon
                      name="mdi:chevron-double-right"
                      class="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
              <div class="mt-6 sm:max-w-xl">
                <h1
                  class="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl"
                  data-aos="fade-up"
                >
                  Making DeFi a safer place!
                </h1>
                <p
                  class="mb-6 text-xl text-gray-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Our goal is to make investments into low-cap DeFi projects
                  more accessible and secure.
                </p>
              </div>

              <a
                href="https://app.rejuvenatefinance.com"
                class="flex flex-row w-full rounded-md border border-transparent bg-green-300 px-5 py-3 text-base font-medium text-white shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 sm:px-10 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span>APP</span>
                <Icon name="mdi:open-in-app" size="28" class="ml-3" />
              </a>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div
            class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <div class="hidden sm:block">
              <div
                class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-800 lg:left-80 lg:right-0 lg:w-full"
                data-aos="fade-left"
                data-aos-delay="500"
              />
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div
              class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="/img/application.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial/stats section -->
      <div class="relative mt-20">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
        >
          <div class="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div
                class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-800 lg:right-72"
                data-aos="fade-right"
                data-aos-delay="500"
              />
              <svg
                class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-500"
                      fill="currentColor"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div
              class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <!-- Testimonial card-->
              <div
                class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src="/img/logo.png"
                  alt=""
                />
                <div class="absolute inset-0 bg-green-300 mix-blend-multiply" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-green-400 via-green-400 opacity-90"
                />
                <div class="relative px-8">
                  <blockquote class="mt-8">
                    <div
                      class="relative text-lg font-medium text-white md:flex-grow"
                    >
                      <svg
                        class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-green-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        />
                      </svg>
                      <p class="relative">
                        One of the main issues with the current state of crypto
                        is the insane number of malicious actors. We’re here to
                        help investors who have suffered and prevent future
                        suffering. I’ve always been affected by the numerous
                        investors who fall victim to rug pulls and other scams.
                        Rejuvenate is affording me the opportunity to bring a
                        caring attitude back into the crypto space.
                      </p>
                    </div>

                    <footer class="mt-4">
                      <p class="text-base font-semibold text-green-200">
                        Sarp C. | CEO at RejuvenateFinance
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
          >
            <!-- Content area -->
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2
                class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl"
                data-aos="fade-up"
              >
                On a mission to make DeFi safer!
              </h2>
              <div class="mt-6 space-y-6 text-gray-300">
                <p class="text-lg" data-aos="fade-up" data-aos-delay="100">
                  RejuvenateFinance is a philanthropic crypto project initially
                  formed to support the Luna community after the collapse of
                  UST. We quickly realized that the entire crypto space could
                  benefit from our project. “We must take care of our own”
                  became our motto. To do this we began to build out additional
                  services to go beyond targeting one community and benefit the
                  entire DeFi space. Our mission is to create a safety net for
                  crypto by providing a single point of access to multiple
                  trusted services throughout all of DeFi.
                </p>
                <p
                  class="text-base leading-7"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  In order to accomplish our mission, we have built an
                  infrastructure which integrates existing DeFi products and
                  strategies in a seamless and cost-efficient way. All of the
                  provider and service fees generated through these offerings
                  will be channeled right back to $RJV holders, the majority of
                  which have suffered from hacks, rug pulls, and/or scams.
                  Staking $RJV will allow the users to participate via voting in
                  shaping Rejuvenate’s future. A project for the people by the
                  people.
                </p>
                <p
                  class="text-base leading-7"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  This project will prove that kindness and support is more
                  important than monetary gain. It will be a impactful reminder
                  that integrity and peace of mind are worth more than any
                  material possessions. RejuvenateFinance will help bring a
                  caring attitude back into the crypto space.
                </p>
              </div>
            </div>

            <!-- Stats section -->
            <div class="mt-10">
              <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                <div
                  v-for="(stat, index) in stats"
                  :key="stat.label"
                  class="border-t-2 border-gray-100 pt-6"
                  data-aos="fade-left"
                  :data-aos-delay="100 + 100 * index"
                >
                  <dt class="text-base font-medium text-gray-300">
                    {{ stat.label }}
                  </dt>
                  <dd class="text-3xl font-bold tracking-tight text-gray-50">
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>
              <div class="mt-10">
                <a href="" class="text-base font-medium text-green-300"
                  >Learn more about how we're changing the crypto
                  world&nbsp&rarr;</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud section -->
      <div class="mt-32">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <h2
                class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl"
                data-aos="fade-up"
              >
                Meet our Partners
              </h2>
              <p
                class="mt-6 max-w-3xl text-lg leading-7 text-gray-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                There are a lot of like-minded projects which have the same
                vision - Together with our partners we make a difference!
              </p>
            </div>
            <div
              class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
            >
              <div
                v-for="(logo, index) in logos"
                :key="logo.name"
                class="col-span-1 flex justify-center bg-gray-800 py-4 px-4"
                data-aos="fade-left"
                :data-aos-delay="index * 100"
              >
                <img class="max-h-24" :src="logo.url" :alt="logo.name" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" class="hidden sm:block">
          <div
            class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-800"
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <svg
            class="absolute top-8 left-1/2 -ml-3"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-500"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-green-300 px-6 py-10 shadow-xl sm:px-12 sm:py-20"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                class="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  class="text-green-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  class="text-green-400 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <h2
                  class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Stay in Touch!
                </h2>
                <p class="mx-auto mt-6 max-w-2xl text-lg text-gray-900">
                  Join our community to get notified about updates.
                </p>
              </div>
              <div class="mt-4 space-x-12 flex flex-row justify-center">
                <a
                  href="https://t.me/+LxJTReW_wDRmMmYx"
                  class="flex flex-row justify-center items-center w-48 rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300 sm:px-10"
                >
                  Telegram
                  <Icon name="mdi:telegram" class="text-white ml-2" size="28" />
                </a>
                <a
                  href="https://discord.com/invite/Cf2VUn4e2R"
                  class="flex flex-row justify-center items-center w-48 rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300 sm:px-10"
                >
                  Discord
                  <Icon name="mdi:discord" class="text-white ml-2" size="28" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";

useHead({
  title: "Rejuvenate",
});

const stats = [
  { label: "Chains", value: "1" },
  { label: "Holders", value: "80+" },
];
const logos = [
  {
    name: "CoinBound",
    url: "/img/coinbound.png",
  },
  {
    name: "CoinCodex",
    url: "/img/coincodex.png",
  },
  {
    name: "MEXC",
    url: "/img/mexc.png",
  },
];
</script>
