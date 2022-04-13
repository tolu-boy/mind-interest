import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
// import diamond from '../assets/svg/Union.svg'

const dashBoardNavTree = [
  {
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},


{
  key: 'new-component-key',
  path: '',
  title: 'my',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'Therapists',
      path: '',
      title: 'Therapists',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'Overview',
          path: '/app/new-component-path-1',
          title: 'Overview',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Waiting List',
          path: '/app/new-component-path-1',
          title: 'Waiting List',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Approved',
          path: '/app/new-component-path-1',
          title: 'Approved',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'Suspended',
          path: '',
          title: 'Suspended',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        }
      ]
    }
  ]
},




{
  key: 'new-component-key1',
  path: '',
  title: 'my',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'Users',
      path: '',
      title: 'Users',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'Overview',
          path: '',
          title: 'Overview',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Active',
          path: '',
          title: 'Active',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

       
        {
          key: 'Suspended',
          path: '',
          title: 'Suspended',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        }
      ]
    }
  ]
},



{
  key: 'Statistics',
  path: `${APP_PREFIX_PATH}/Statistics`,
  title: 'Statistics',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},


{
  key: 'new-component-key2',
  path: '',
  title: 'my',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'Revenue',
      path: '',
      title: 'Revenue',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'Earning',
          path: '',
          title: 'Earning',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Payouts',
          path: '',
          title: 'Payouts',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        },

       
        {
          key: 'Statements',
          path: '',
          title: 'Statements',
          icon: DashboardOutlined,
          breadcrumb: true,
          submenu: []
        }
      ]
    }
  ]
},




{
  key: 'Messages',
  path: `${APP_PREFIX_PATH}/Messages`,
  title: 'Messages',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},



{
  key: 'Logout',
  path: `${APP_PREFIX_PATH}/Logout`,
  title: 'Logout',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},





]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
