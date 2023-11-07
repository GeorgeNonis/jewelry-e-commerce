import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { allCategories } from "../../config";
import { ItemsInterface } from "./interfaces";

export const useCategoryPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ItemsInterface[]>([]);

  useEffect(() => {
    setLoading(true);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setItems([
      ...allCategories.find(
        (c) => c.name.toLocaleUpperCase() === category?.toLocaleUpperCase()
      )!.items,
    ]);

    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, [location, category]);
  return {
    items,
    loading,
  };
};
