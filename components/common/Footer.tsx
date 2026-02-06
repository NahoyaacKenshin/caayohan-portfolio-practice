import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-700 py-7">
        <div className="container mx-auto px-6">
            <div className="flex justify-between">
                <div>
                    <h2>My Portfolio</h2>
                    <p>Cebu, City</p>
                </div>

                <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li>Email: test@gmail.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}
