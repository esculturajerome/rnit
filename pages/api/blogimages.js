import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { folder } = req.query;

  // const folderPath = path.join(
  //   process.cwd(),
  //   "public/blogs/acelebrationofloveandlegacy"
  // );

  const folderPath = path.join(process.cwd(), `public/${folder}`);

  const fileNames = fs.readdirSync(folderPath);

  const imageFileNames = fileNames.filter((fileName) =>
    /\.(jpg|jpeg|png|gif)$/i.test(fileName)
  );

  res.status(200).json({ images: imageFileNames });
}
