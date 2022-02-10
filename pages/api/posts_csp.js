export default async(req, res) => {

    const request = await fetch('http://cspconlutas.org.br/wp-json/wp/v2/posts');
    const json = await request.json();
    res.status(200).json({
        posts: json
    });
}