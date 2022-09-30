import React from 'react'
 
const useCases =[
  {id :1 , title: 'Content strategy', desc :'Automate your content strategy' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-content-strategy.svg" alt="Content strategy"/> },
  {id :2 , title: 'Marketing', desc :'Keep messages consistent + on-brand' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-marketing.svg" alt="Marketing"/> },
  {id :3 , title: 'Editorial', desc :'AEnforce your editorial guidelines' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-editorial.svg" alt="Editorial"/> },
  {id :4 , title: 'Support', desc :'Give agents the right words' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-support.svg" alt="Support"/> },
  {id :5 , title: 'Documentation', desc :'Write clear, consistent, scannable docs' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-documentation-1.svg" alt="Documentation"/> },
  {id :6 , title: 'Learning and development', desc :'Build high-quality learning content' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-learning.svg" alt="Learning and development"/> },
  {id :7 , title: 'Operations and IT', desc :'Prioritize data security and privacy' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-it.svg" alt="Operations and IT"/> },
  {id :8 , title: 'HR', desc :'Inspire a healthy, positive culture' , img:<img loading="lazy" width="32" height="32" src="https://writer.com/wp-content/uploads/2021/09/ic-hr.svg" alt="HR" /> },
]

const Naah = () => {
  return (
<>
<Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex gap-1 h-full cursor-pointer items-center">
                <span>Products</span>
                <FaChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition  duration-700 ease-out"
                enterFrom="transform -translate-y-10 -z-10 scale-95  opacity-0"
                enterTo="transform translate-y-0 -z-10   scale-100 opacity-100"
                leave="transition duration-100  ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 text-black pt-4 pb-2 text-sm ">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
</>
  )
}

export default Naah