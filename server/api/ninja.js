export default defineEventHandler(async (event) => {
  // // handle query param
  // const { name } = getQuery(event)

  // // handle post data
  // const body = await readBody(event)

  // api call with private key
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2'
  )

  // return {
  //   message: `Hello, ${name}! You are ${body.age} years old.`,
  // }
  return data
})
