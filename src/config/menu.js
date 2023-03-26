import { IconCar, IconGauge, IconPhoto } from "@tabler/icons-react"

export const headerMenu = [
    {
        label: 'Account',
        link: '/account'
    },
    {
        label: 'My Trips',
        link: '/my-trips'
    }
]

export const sidenavLinks = [
    {
        icon: IconGauge,
        label: 'Dashboard',
        link: '/'
    },
    {
        icon: IconCar,
        label: 'My Trips',
        link: '/trips',
        items: [
            {
                label: 'Overview',
                link: '/trips'
            },
            {
                label: 'New Trip',
                link: '/trips/new'
            },
            {
                label: 'Past Adventures',
                link: '/trips/past'
            }
        ]
    },
    {
        icon: IconPhoto,
        label: 'Gallery',
        link: '/gallery',
        items: [
            {
                label: 'Gallery',
                link: '/gallery'
            },
            {
                label: 'By Trip',
                link: '/gallery/trip'
            }
        ]
    }
]