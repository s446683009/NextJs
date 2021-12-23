// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
export function getMenu(){
   return fetch('http://rap2api.taobao.org/app/mock/244215/api/menu/getMenu').then(t=>t.json());

}