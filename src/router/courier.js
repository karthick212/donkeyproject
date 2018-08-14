import CourierCompanyvw from '@/admin/pages/courier/CourierCompanyvw'
import CourierCompanyadd from '@/admin/pages/courier/CourierCompanyadd'
import CourierRatevw from '@/admin/pages/courier/CourierRatevw'
import CourierRateadd from '@/admin/pages/courier/CourierRateadd'

const CourierRoutes = [
    {
        path: '/courier/CourierCompany',
        name: 'CourierCompanyvw',
        component: CourierCompanyvw
    },
    {
        path: '/courier/CourierCompany/add',
        name: 'CourierCompanyadd',
          component: CourierCompanyadd
    },
    {
        path: '/courier/CourierRate',
        name: 'CourierRatevw',
        component: CourierRatevw
    },
    {
        path: '/courier/CourierRate/add',
        name: 'CourierRateadd',
          component: CourierRateadd
    }
]

export default CourierRoutes
