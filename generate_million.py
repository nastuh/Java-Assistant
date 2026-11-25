from knowledge_base import million_count, generated_question, generated_answer
import json
with open('million_qa.jsonl','w',encoding='utf-8') as f:
    for i in range(million_count()):
        f.write(json.dumps({'id':i+1,'question':generated_question(i),'answer':generated_answer(i)},ensure_ascii=False)+'\n')
print('created million_qa.jsonl with 1,000,000 records')
