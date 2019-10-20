/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 20:39:21
 * @LastEditTime: 2019-10-18 10:26:42
 * @LastEditors: Please set LastEditors
 */
import Search from '../../components/Search/Search.vue'
import ComingSoon from '../../components/ComingSoon/ComingSoon.vue'
import NowPlaying from '../../components/NowPlaying/NowPlaying.vue'
import City from '../../components/City/City.vue'
export default{
  path:'/movie',
  component:()=>import ('../../pages/Movie/Movie'),
  children:[{
    path:'/movie/city',
    component:City
  },{
    path:'/movie/nowPlaying',
    component:NowPlaying
  },{
    path:'/movie/comingSoon',
    component:ComingSoon
  },{
    path:'/movie/search',
    component:Search
  },
  {
    path: '',
    redirect: '/movie/nowPlaying'
  }
]
  }