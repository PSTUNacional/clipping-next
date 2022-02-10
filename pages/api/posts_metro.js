export default async(req, res) => {

    const request = await fetch('https://www.metroviarios.org.br/site/wp-json/wp/v2/posts');
    const json = await request.json();
    res.status(200).json({
        posts: json
    });
}