import puppeteer from 'puppeteer-core'

export const fetchProducts = async()=>{


        const auth = "brd-customer-hl_5af81365-zone-zone1:gktp04d6697k"
        let browser
        try {
           browser = await puppeteer.connect({
                browserWSEndpoint: `wss://${auth}@zproxy.lum-superproxy.io:9222`
           })
    
           const page = await browser.newPage()
           page.setDefaultNavigationTimeout(2*60*1000)
    
           await page.goto("https://www.amazon.com/Best-Sellers/zgbs")
    
           const selector = ".a-carousel-container"
           

           
           
           const el = await page.$$(selector)
           
           
    
           const func = () => {
            return Promise.all(
                el.map(async (e: any) => {
                    const item =  await e.evaluate((el: any) => el.innerText)
                       return item
                })
            )  
             }
             const text = await func()
    
             
           const items = text.map((item: string)=>{
                console.log('====================================');
                console.log(item);
                console.log('====================================');
                const sectionTitle = item.split("\n")[0];

                const products = item.match(/#(\d+)\n(.+)\n(.+)\n\$(.+)\n/ig);

                const productList = products?.map((product: any) => {
                const [, positioning, title, rating, price] = product.match(/#(\d+)\n(.+)\n(.+)\n\$(.+)\n/i);
                    return { title, price, rating, positioning };
                });

                const productSections = [{ section: sectionTitle, products: productList }];

                return productSections;
           }) 
        
            return items
        } catch (e) {
            console.log('====================================');
            console.log("could not scrape", e);
            console.log('====================================');
        } 
        finally {
            await browser?.close()
        }
        return
    }
    
