export async function get({ params, request }) {
    let url = "https://wa.me/"
    const { preview } = params
    const [phone, message] = preview.split('&')
    
    const link = `${url}${phone}${message ? '?text=' + message : ' '}`
    console.log(link)


    return Response.redirect(link)
}