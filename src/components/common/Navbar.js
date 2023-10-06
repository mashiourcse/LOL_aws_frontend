import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Project Bio', href: '/', current: false },
  { name: 'Tournament Rankings', href: '/tournament_rankings', current: false },
  { name: 'Global Rankings', href: '/global_rankings', current: false },
  { name: 'Team Rankings', href: '/team_rankings', current: false },
  { name: 'About Team', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const styles = {
  marginLeft: '0px',
  marginRight: '-384px',
  paddingLeft: '7rem',
  background: '#1f2937'
};
export default function Navbar() {
  return (
    <Disclosure as="nav" className="flex flex-col h-screen w-64 bg-gray-900 text-white">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between p-4">
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-auto rounded-full"
                src="/lolhack.png"
                alt="Your Company"
              />
              
            </div>
            
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                
                <p>
                  <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                    'rounded-md px-4 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
