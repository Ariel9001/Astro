import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface SubNavigationItem {
    name: string;
    href: string;
}

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    children?: SubNavigationItem[];
}

const navigation: NavigationItem[] = [
    {
        name: 'Dashboard', href: '/home', current: false,
        children: [
            { name: 'Reportes', href: '/report' },
            { name: 'Paneles', href: '/panel' },
        ],
    },
    {
        name: 'Ventas',
        href: '#',
        current: false,
        children: [
            { name: 'Facturacion', href: '/invoice' },
            { name: 'Retenciones', href: '/retention' },
        ],
    },
    {
        name: 'Compras', href: '#', current: false,
        children: [
            { name: 'Ingreso de compra', href: '#' },
            { name: 'Reporte', href: '/report' },
        ],
    },
    {
        name: 'Inventario', href: '#', current: false,
        children: [
            { name: 'Ingreso', href: '#' },
            { name: 'Salidas', href: '#' },
            { name: 'Transferencias', href: '#' },
        ],
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBarsTSX({ name }: { name: string }) {
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }: { open: boolean }) => (
                    <>
                        <div className="mx-auto max-w-1xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <a href="/home">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </a>
                                    </div>

                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) =>
                                                item.children ? (
                                                    <Menu as="div" className="relative" key={item.name}>
                                                        <Menu.Button className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium flex items-center'
                                                        )}>
                                                            {item.name}
                                                        </Menu.Button>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {item.children.map((subItem) => (
                                                                    <Menu.Item key={subItem.name}>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href={subItem.href}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'
                                                                                )}
                                                                            >
                                                                                {subItem.name}
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                ) : (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }: { active: boolean }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Perfil
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }: { active: boolean }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Configuración
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }: { active: boolean }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Salir
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    item.children ? (
                                        <Disclosure key={item.name} as="div" className="space-y-1">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button
                                                        as="a"
                                                        // href={item.href ?? '#'}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-base font-medium flex items-center justify-between'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="space-y-1 px-4">
                                                        {item.children?.map((subItem) => (
                                                            <Disclosure.Button
                                                                key={subItem.name}
                                                                as="a"
                                                                href={subItem.href}
                                                                className="text-gray-400 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                                            >
                                                                {subItem.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ) : (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    )
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <header className="bg-white shadow">
                <div className="mx-auto max-w-1xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>
                </div>
            </header>
        </div>

    )
}
