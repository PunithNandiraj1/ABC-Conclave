import { comma } from "postcss/lib/list"

const featuredTestimonial = {
  body: 'I would like to extend my gratitude to ABC Conclave for organizing such a remarkable event. It provided an excellent platform for us to exchange ideas across business sectors, especially focusing on Web3 technology, blockchain, and cryptocurrency. The conclave truly stood out as a nexus for innovative thoughts and collaborative discussions in these rapidly evolving fields.',
  author: {
    name: 'Ahmed Elmetwally',
    handle: 'Private Office of His Higness Sheikh Mohamed Bin Ahmed Bin Hamdan Al Nahyan',
    imageUrl:
    '/Ahmed.png',
    company:"https://media.licdn.com/dms/image/C4D0BAQHySKgtDawPWg/company-logo_200_200/0/1680072721757/pvtdept_logo?e=1728518400&v=beta&t=2-aie6qCEWq7MHY-iVyr4xvp7iJX4PRyL7b-dHEfpyM"
  },
}
const testimonials = [
  [
    [
      {
        body: 'I would like to participate again next year as well. This is exciting!',
        author: {
          name: 'Yat Siu',
          handle: 'Animoca',
          imageUrl:
            '/yat.png',
            company:"/1.png"
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'I found it quite interesting and very well organised. Great job in terms of organising the show.',
        author: {
          name: 'Alex Chahade',
          handle: 'Binance',
          imageUrl:
            '/Alex.png',
         company:"/4.png"
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "It's all about knowledge sharing, all about networking, very exciting to be here.",
        author: {
          name: 'Sergej Kunj',
          handle: '1inch',
          imageUrl:
            '/Sergez.png',
         company:"/3.png"
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'I had an incredible experience. It was amazing to connect with people from various parts of the world.',
        author: {
          name: 'Ravikant Agrawal',
          handle: 'Polygon',
          imageUrl:
          '/ravikanth.png',
        company:"/2.png"
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative isolate  pb-32 pt-24 sm:pt-32">
     
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight uppercase text-purple-500 sm:text-4xl">
          Here’s what our previous attendees have to say!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="flex flex-col p-2 transition-all  ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95  bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-sato font-semibold leading-7 tracking-tight text-gray-200 sm:p-6 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-100 px-6 py-6 sm:flex-nowrap">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold font-sato text-white">{featuredTestimonial.author.name}</div>
                <div className="text-gray-100 font-sato">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.company}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 font-sato xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="flex flex-col p-8 transition-all ring-2 ring-purple-950 hover:shadow-xl hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95"
                    >
                      <blockquote className="text-gray-100">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                        <div className="flex items-center gap-x-4 ">
                          <div>
                          <div className="font-semibold text-white">{testimonial.author.name}</div>
                          <div className="text-gray-100">{`@${testimonial.author.handle}`}</div>
                          </div>
                          <img src={testimonial.author.company} className="rounded-full  h-12" alt="" srcset="" />
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
