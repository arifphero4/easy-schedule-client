import { useQuery } from "@tanstack/react-query";

const useUserEvents = () => {
  const {
    isLoading,
    error,
    data: usersData,
    refetch,
  } = useQuery(["usersData"], () =>
    fetch(`https://easy-schedule-backend-production.up.railway.app/users`).then(
      (res) => res.json()
    )
  );

  return { isLoading, error, usersData, refetch };
};

export default useUserEvents;
