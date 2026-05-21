function useMessage() {
  function show(message: string) {
    console.log(message);
  }

  return { show };
}

export { useMessage };
