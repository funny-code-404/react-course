
export const fetchData = async (
  url: string,
  onSuccess: (data: any) => void,
  onError: (error: string) => void
) => {
  try {
    const response = await fetch(url);
    const res = await response.json();

    onSuccess(res);
  } catch (e) {
    if (e instanceof Error) {
      onError(e.message);
    }
  }
};
