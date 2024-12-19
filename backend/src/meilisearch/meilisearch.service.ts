import { Injectable } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch';
import 'dotenv/config'

const apiKey = process.env.MSEARCH_API_KEY;
const host = process.env.MSEARCH_HOST;

@Injectable()
export class MeilisearchService {
  private client: MeiliSearch;

  constructor() {
    this.client = new MeiliSearch({
      host,
      apiKey
    });
  }

  async addDocuments(indexName: string, documents: object[]) {
    const index = this.client.index(indexName);
    return index.addDocuments(documents);
  }
}