import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavouritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0)
    content = <p>You got no favorites yet. Start adding some?</p>;
  else content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>;
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;
