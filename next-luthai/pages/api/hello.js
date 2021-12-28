// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
export function getMenu(language){
   return fetch('http://120.55.117.95:3781//pageSetApi/GetMenu?language='+language).then(t=>t.json());

}