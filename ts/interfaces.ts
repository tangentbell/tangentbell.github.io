export interface Music {
  id: number
  name: string
  year: number
  s3_Key: string
  playtime: string
}

export interface Art {
  id: number
  year: number
  s3_Key: string
}

export interface Blog {
  id: number
  published: string
  description: string
  title: string
  s3_Key: string
}
