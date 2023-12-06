const VIEWS_CONFIG = [
    {
        path: '/real-estate',
        name: 'real-estate'
    },
    {
        path: '/template',
        name: 'template',
    }
]

function SidebarImpl() {
    return { views: VIEWS_CONFIG }
}

export default {
    name: 'Sidebar',
    setup: SidebarImpl
}