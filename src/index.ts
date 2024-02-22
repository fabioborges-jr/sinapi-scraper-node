// import {promises as fs} from 'fs'
import Scraper from './class/Scraper'

async function main() {
  const scraper = new Scraper()
  await scraper.init()
  await scraper.clickAcceptCookie()
  const list = JSON.stringify(await scraper.getAllFilesHref())

  // fs.writeFile('sinapi.txt', list, 'utf-8', (error) => {
  //   if (error) throw error
  // })

  return Response.json('Sinapi works!')
}

main()
