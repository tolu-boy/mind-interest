import { 
  DashboardOutlined,
  DeploymentUnitOutlined,
  UserOutlined,
  BarChartOutlined,
  PieChartOutlined,
  MessageOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
// import diamond from '../assets/svg/Union.svg'

const dashBoardNavTree = [
  {
  key: 'home',
  path: `${APP_PREFIX_PATH}/dashboard`,
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
      icon: DeploymentUnitOutlined ,
      breadcrumb: true,
      submenu: [
        {
          key: 'Overview',
          path: `${APP_PREFIX_PATH}/therapists/Overview`,
          title: 'Overview',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Waiting List',
          path: `${APP_PREFIX_PATH}/therapists/WaitingList`,
          title: 'Waiting List',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Approved',
          path: `${APP_PREFIX_PATH}/therapists/Approved`,
          title: 'Approved',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'Suspended',
          path: `${APP_PREFIX_PATH}/therapists/Suspended`,
          title: 'Suspended',
          icon: '',
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
      icon: UserOutlined ,
      breadcrumb: true,
      submenu: [
        {
          key: ' userOverview',
          path: '',
          title: 'Overview',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'userActive',
          path: '',
          title: 'Active',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

       
        {
          key: 'userSuspended',
          path: '',
          title: 'Suspended',
          icon: '',
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
  icon:BarChartOutlined ,
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
      icon: PieChartOutlined ,
      breadcrumb: true,
      submenu: [
        {
          key: 'Earning',
          path: '',
          title: 'Earning',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

        {
          key: 'Payouts',
          path: '',
          title: 'Payouts',
          icon: '',
          breadcrumb: true,
          submenu: []
        },

       
        {
          key: 'Statements',
          path: '',
          title: 'Statements',
          icon: '',
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
  icon: MessageOutlined ,
  breadcrumb: false,
  submenu: []
},



{
  key: 'Logout',
  path: `${APP_PREFIX_PATH}/Logout`,
  title: 'Logout',
  icon: LogoutOutlined,
  breadcrumb: false,
  submenu: []
},




]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
