import ProductTypevw from '@/admin/pages/common/ProductTypevw'
import ProductTypeadd from '@/admin/pages/common/ProductTypeadd'
import StateMastervw from '@/admin/pages/common/StateMastervw'
import StateMasteradd from '@/admin/pages/common/StateMasteradd'
import CityMastervw from '@/admin/pages/common/CityMastervw'
import CityMasteradd from '@/admin/pages/common/CityMasteradd'
const CommonRoutes = [
    {
        path: '/common/ProductType',
        name: 'ProductTypevw',
          component: ProductTypevw
    },
    {
        path: '/common/ProductType/add',
        name: 'ProductTypeadd',
          component: ProductTypeadd
    },
     {
        path: '/common/StateMaster',
        name: 'StateMastervw',
          component: StateMastervw
    },
    {
        path: '/common/StateMaster/add',
        name: 'StateMasteradd',
          component: StateMasteradd
    },
    {
        path: '/common/CityMaster',
        name: 'CityMastervw',
          component: CityMastervw
    },
    {
        path: '/common/CityMaster/add',
        name: 'CityMasteradd',
          component: CityMasteradd
    }
]

export default CommonRoutes
