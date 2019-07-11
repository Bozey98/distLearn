using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DistanceLearning.Models
{
    public class Question
    {
        public int MyProperty { get; set; }
        public IEnumerable<Answer> Answers { get; set; }
    }
}
