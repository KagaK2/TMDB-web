import { useContext, useEffect } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import CardList from '../components/CardList/CardList'


export default function Home() {
  const RootStore = useContext(RootStoreContext);

  useEffect(() => {
    const fetchDaily = async () => {
      RootStore.apiStore.fetchDaily()
    }
    fetchDaily();
  },[RootStore.apiStore])

  return (
    <div>
      <CardList/>
      {RootStore.apiStore.dailyTrending.map(item => {
        return (
          <div key={item.id}>{item.original_title}</div>
        )
      })}
    </div>
    
  )
}