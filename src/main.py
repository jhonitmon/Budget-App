# importing sys
import sys

# adding lib to PATH
sys.path.insert(0,"/Users/jonathan/Documents/Python Projects/Budget-App/lib")

# importing libraries
import budget
import json

budget = budget.Budget()
budget.send_actual()
# budget.add_data()
# dict = budget.summarize()

# # save data in csv
# budget.tally.to_csv("data/budget.csv", index=False)

# # create json of summary
# with open("data/jsontest.json","w", encoding="utf-8") as f:
#     json.dump(dict,f,ensure_ascii=False, indent= 4)